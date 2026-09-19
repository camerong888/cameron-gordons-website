"use client";

import { useEffect, useId, useRef } from "react";

/**
 * The hero's board: a routed PCB drawn in SVG, with current flowing along
 * the traces. Everything is generated from the layout constants below using
 * real routing rules — 45° bends, buses that keep their pitch through a
 * corner, serpentine length tuning, vias where a trace changes layer — so it
 * can be re-laid-out by editing numbers, not path strings.
 *
 * Motion is CSS only (see "Circuit field" in globals.css). Traces draw in
 * once; pulses are dashes whose offset animates, so a streak follows every
 * bend of its trace. Durations derive from each trace's real length, which
 * keeps current moving at one physical speed across the board. The whole
 * field is static under prefers-reduced-motion and pauses when the hero
 * scrolls out of view.
 */

type Pt = readonly [number, number];

const VIEW_W = 1000;
const VIEW_H = 900;

/* ------------------------------------------------------------------ */
/* Geometry helpers                                                    */
/* ------------------------------------------------------------------ */

const toPath = (pts: readonly Pt[]) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ");

const lengthOf = (pts: readonly Pt[]) =>
  pts.reduce((sum, [x, y], i) => {
    if (i === 0) return 0;
    const [px, py] = pts[i - 1];
    return sum + Math.hypot(x - px, y - py);
  }, 0);

/**
 * Serpentine length tuning along +x: `teeth` trombone meanders of height
 * `amp` with 45° chamfers, the way a layout tool adds delay to a short net.
 */
function serpentine(
  x0: number,
  y: number,
  teeth: number,
  { amp = 18, width = 26, chamfer = 5 } = {},
): Pt[] {
  const pts: Pt[] = [];
  for (let t = 0; t < teeth; t++) {
    const x = x0 + t * width;
    pts.push(
      [x, y],
      [x + chamfer, y - chamfer],
      [x + chamfer, y - amp + chamfer],
      [x + 2 * chamfer, y - amp],
      [x + width / 2, y - amp],
      [x + width / 2 + chamfer, y - amp + chamfer],
      [x + width / 2 + chamfer, y - chamfer],
      [x + width / 2 + 2 * chamfer, y],
    );
  }
  pts.push([x0 + teeth * width, y]);
  return pts;
}

/* ------------------------------------------------------------------ */
/* Placement                                                           */
/* ------------------------------------------------------------------ */

/*
 * The hero copy is a keep-out. The board lives on the right; between the
 * copy and the FPGA runs a routing channel (x ≈ 570–610). Nets that must
 * travel left rise through that channel to the band above the copy
 * (y ≤ 200) or drop to the band below it (y ≥ 760) — nothing crosses text.
 */
const FPGA = { x: 630, y: 350, size: 200 };
const DDR = { x: 800, y: 150, w: 160, h: 64 };
const FLASH = { x: 850, y: 690, w: 110, h: 70 };
const EDGE_X = 962; // where the edge-connector fingers begin

const fpgaLeft = FPGA.x;
const fpgaRight = FPGA.x + FPGA.size;
const fpgaTop = FPGA.y;
const fpgaBottom = FPGA.y + FPGA.size;

/* ------------------------------------------------------------------ */
/* Routing                                                             */
/* ------------------------------------------------------------------ */

/**
 * FPGA → DDR: five nets leave the top of the package, turn right, then turn
 * up into the memory. Each bend advances 20·tan(22.5°) ≈ 8.28 per net, which
 * holds the 20-unit pitch through both corners — and makes every net the
 * same length, as a real length-matched bus is.
 */
const BEND = 20 * Math.tan(Math.PI / 8);
const ddrBus: Pt[][] = Array.from({ length: 5 }, (_, k) => {
  const x = 690 + 20 * k;
  const turnY = Math.round(338 - BEND * (4 - k));
  const runY = 238 + 20 * k;
  const padX = 820 + 20 * k;
  const riseY = Math.round(224 + BEND * k);
  return [
    [x, fpgaTop],
    [x, turnY],
    [x + (turnY - runY), runY],
    [padX - (runY - riseY), runY],
    [padX, riseY],
    [padX, DDR.y + DDR.h],
  ];
});

/**
 * Fan-out from the FPGA's left edge. Three nets rise through the channel to
 * the upper band, three are short stubs to vias, three drop to the lower
 * band. Risers nest (outer net, outer riser) so nothing crosses.
 */
const fanOut: Pt[][] = [
  [[fpgaLeft, 370], [616, 370], [606, 360], [606, 190], [576, 160], [120, 160]],
  [[fpgaLeft, 390], [600, 390], [590, 380], [590, 206], [560, 176], [250, 176]],
  [[fpgaLeft, 410], [584, 410], [574, 400], [574, 222], [544, 192], [380, 192]],
  [[fpgaLeft, 430], [598, 430]],
  [[fpgaLeft, 450], [582, 450]],
  [[fpgaLeft, 470], [598, 470]],
  [[fpgaLeft, 490], [584, 490], [574, 500], [574, 742], [544, 772], [400, 772]],
  [[fpgaLeft, 510], [600, 510], [590, 520], [590, 758], [560, 788], [270, 788]],
  [[fpgaLeft, 530], [616, 530], [606, 540], [606, 774], [576, 804], [110, 804]],
];

/** FPGA → edge connector: seven nets, the middle three tuned by serpentine. */
const edgeBus: Pt[][] = Array.from({ length: 7 }, (_, k) => {
  const y = 390 + 20 * k;
  const fingerY = 372 + 26 * k;
  const jogX = 846 + 4 * Math.abs(3 - k);
  const start: Pt[] = [
    [fpgaRight, y],
    [jogX, y],
    [jogX + Math.abs(fingerY - y), fingerY],
  ];
  const teeth = k === 3 ? 3 : k === 2 || k === 4 ? 2 : 0;
  const tuned =
    teeth > 0
      ? serpentine(884, fingerY, teeth, { amp: 15, width: 22, chamfer: 4 })
      : [];
  return [...start, ...tuned, [EDGE_X, fingerY]];
});

/** FPGA → flash: three nets out of the bottom edge, fanning in to the chip. */
const flashBus: Pt[][] = Array.from({ length: 3 }, (_, k) => {
  const x = 770 - 20 * k;
  const padY = FLASH.y + 17 + 18 * k;
  const turnY = padY - (50 + 20 * k);
  return [
    [x, fpgaBottom],
    [x, turnY],
    [x + (padY - turnY), padY],
    [FLASH.x, padY],
  ];
});

/** A wider supply net dropping in from the top of the board. */
const powerRail: Pt[] = [
  [664, 0],
  [664, 118],
  [648, 134],
  [648, fpgaTop],
];

/** Inner-layer copper, seen faintly through the substrate — never under copy. */
const innerLayer: Pt[][] = [
  [[1000, 112], [890, 112], [856, 78], [856, 0]],
  [[1000, 612], [858, 612], [826, 644], [826, 900]],
  [[700, 900], [700, 840], [742, 798], [1000, 798]],
  [[330, 0], [330, 92], [372, 134], [524, 134]],
  [[450, 900], [450, 736], [482, 704], [566, 704]],
  [[960, 0], [960, 60]],
];

/* ------------------------------------------------------------------ */
/* Nets, vias, and the pulses that ride them                           */
/* ------------------------------------------------------------------ */

const traces: Pt[][] = [...ddrBus, ...fanOut, ...edgeBus, ...flashBus];

/** Every fan-out net ends in a via; a few more stitch the ground pour. */
const vias: Pt[] = [
  ...fanOut.map((net) => net[net.length - 1]),
  [524, 134],
  [566, 704],
  [648, 134],
  [900, 830],
  [930, 830],
  [960, 830],
];

interface Pulse {
  net: Pt[];
  /** Seconds before the first pass, so the board powers up first. */
  delay: number;
  /** Idle distance between passes, as a multiple of the net's length. */
  rest: number;
  reverse?: boolean;
  tone?: "signal" | "power";
  /** Hidden on small screens, where fewer moving parts read better. */
  desktopOnly?: boolean;
}

const pulses: Pulse[] = [
  { net: ddrBus[1], delay: 1.7, rest: 1.4 },
  { net: ddrBus[3], delay: 2.9, rest: 1.9, reverse: true },
  { net: fanOut[0], delay: 2.1, rest: 0.9, desktopOnly: true },
  { net: fanOut[2], delay: 3.4, rest: 0.7, reverse: true, desktopOnly: true },
  { net: fanOut[6], delay: 1.9, rest: 0.8, desktopOnly: true },
  { net: fanOut[8], delay: 4.1, rest: 1.1, reverse: true, desktopOnly: true },
  { net: edgeBus[1], delay: 2.4, rest: 1.6 },
  { net: edgeBus[3], delay: 1.8, rest: 1.0 },
  { net: edgeBus[5], delay: 3.7, rest: 1.8, reverse: true },
  { net: flashBus[1], delay: 2.6, rest: 1.5, reverse: true },
  { net: powerRail, delay: 1.5, rest: 0.6, tone: "power" },
];

/** Current moves at one physical speed, in viewBox units per second. */
const SPEED = 170;
/** Streak length: a faint tail, a brighter body, a hot leading edge. */
const STREAK = { tail: 120, body: 46, head: 12 };
/** Every path is normalized to this many dash units. */
const UNITS = 1000;

/**
 * Dash math for one pulse. With dash offset `o`, the streak covers
 * [-o, -o + tail] along the net (in dash units), so:
 *   forward  — starts just before the net (o = tail) and travels one period;
 *   reverse  — starts just past the end (o = -UNITS) and travels back one.
 * A full period per cycle makes the loop seamless, and `rest` guarantees the
 * next streak only enters after this one has left.
 */
function pulseStyle(p: Pulse) {
  const len = lengthOf(p.net);
  const period = UNITS * (1 + p.rest);
  const unit = (px: number) => (px / len) * UNITS;
  const tail = unit(STREAK.tail);
  const r = (n: number) => Number(n.toFixed(1));
  // Body and tip share the tail's LEADING edge: the far end when travelling
  // forward (a zero-length spacer dash pushes them there), the near end in
  // reverse.
  const layer = (px: number) => {
    const dash = unit(px);
    return p.reverse
      ? `${r(dash)} ${r(period - dash)}`
      : `0 ${r(tail - dash)} ${r(dash)} ${r(period - tail)}`;
  };
  return {
    duration: (len * (1 + p.rest)) / SPEED,
    from: r(p.reverse ? -UNITS : tail),
    to: r(p.reverse ? -UNITS + period : tail - period),
    tail: `${r(tail)} ${r(period - tail)}`,
    body: layer(STREAK.body),
    head: layer(STREAK.head),
  };
}

/* ------------------------------------------------------------------ */
/* Parts                                                               */
/* ------------------------------------------------------------------ */

function Via({ at: [cx, cy] }: { at: Pt }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="5" className="cf-via-ring" />
      <circle cx={cx} cy={cy} r="1.8" className="cf-via-hole" />
    </g>
  );
}

/** A two-terminal passive: decoupling caps hugging the FPGA's supply pins. */
function Passive({ at: [x, y], vertical }: { at: Pt; vertical?: boolean }) {
  const [w, h] = vertical ? [9, 20] : [20, 9];
  return (
    <g transform={`translate(${x - w / 2} ${y - h / 2})`}>
      <rect width={w} height={h} rx="1.5" className="cf-part" />
      {vertical ? (
        <>
          <rect width={w} height="5" rx="1" className="cf-pad" />
          <rect y={h - 5} width={w} height="5" rx="1" className="cf-pad" />
        </>
      ) : (
        <>
          <rect width="5" height={h} rx="1" className="cf-pad" />
          <rect x={w - 5} width="5" height={h} rx="1" className="cf-pad" />
        </>
      )}
    </g>
  );
}

/** The ball grid under the FPGA, with the die's keep-out left clear. */
const BALLS: Pt[] = [];
for (let r = 0; r < 9; r++) {
  for (let c = 0; c < 9; c++) {
    const inDie = r >= 3 && r <= 5 && c >= 3 && c <= 5;
    if (!inDie) BALLS.push([FPGA.x + 20 + c * 20, FPGA.y + 20 + r * 20]);
  }
}

/* ------------------------------------------------------------------ */

export default function CircuitField({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const haloId = `cf-halo-${useId().replace(/:/g, "")}`;

  // Animate only while the hero is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => el.setAttribute("data-live", String(entry.isIntersecting)),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
      data-live="true"
      className={`circuit-field ${className}`}
    >
      <defs>
        <filter id={haloId} x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Inner layer: dim copper under the mask, for depth */}
      <g className="cf-inner">
        {innerLayer.map((net, i) => (
          <path key={i} d={toPath(net)} />
        ))}
      </g>

      {/* A soft halo under the top-layer copper. Blurred once, never animated. */}
      <g className="cf-halo" filter={`url(#${haloId})`}>
        {traces.map((net, i) => (
          <path key={i} d={toPath(net)} />
        ))}
        <path d={toPath(powerRail)} strokeWidth="7" />
      </g>

      {/* Top-layer copper, drawn in on load */}
      <g className="cf-copper">
        {traces.map((net, i) => (
          <path
            key={i}
            d={toPath(net)}
            pathLength={UNITS}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
        <path
          d={toPath(powerRail)}
          pathLength={UNITS}
          className="cf-power"
          style={{ "--i": 2 } as React.CSSProperties}
        />
      </g>

      {/* Parts */}
      <g className="cf-parts">
        {/* FPGA: package, ball grid, die, pin-1 mark */}
        <rect
          x={FPGA.x}
          y={FPGA.y}
          width={FPGA.size}
          height={FPGA.size}
          rx="10"
          className="cf-part"
        />
        {BALLS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.2" className="cf-ball" />
        ))}
        <rect
          x={FPGA.x + 66}
          y={FPGA.y + 66}
          width="68"
          height="68"
          rx="5"
          className="cf-die"
        />
        <path
          d={`M${FPGA.x + 10} ${FPGA.y + 24} V${FPGA.y + 10} H${FPGA.x + 24} Z`}
          className="cf-pin1"
        />

        {/* DDR: package with pads on both long edges */}
        <rect
          x={DDR.x}
          y={DDR.y}
          width={DDR.w}
          height={DDR.h}
          rx="6"
          className="cf-part"
        />
        {Array.from({ length: 7 }, (_, i) => (
          <g key={i}>
            <rect
              x={DDR.x + 15 + i * 20}
              y={DDR.y + DDR.h - 4}
              width="10"
              height="8"
              rx="1.5"
              className="cf-pad"
            />
            <rect
              x={DDR.x + 15 + i * 20}
              y={DDR.y - 4}
              width="10"
              height="8"
              rx="1.5"
              className="cf-pad"
            />
          </g>
        ))}

        {/* Flash */}
        <rect
          x={FLASH.x}
          y={FLASH.y}
          width={FLASH.w}
          height={FLASH.h}
          rx="6"
          className="cf-part"
        />
        {Array.from({ length: 3 }, (_, i) => (
          <g key={i}>
            <rect
              x={FLASH.x - 4}
              y={FLASH.y + 12 + i * 18}
              width="8"
              height="10"
              rx="1.5"
              className="cf-pad"
            />
            <rect
              x={FLASH.x + FLASH.w - 4}
              y={FLASH.y + 12 + i * 18}
              width="8"
              height="10"
              rx="1.5"
              className="cf-pad"
            />
          </g>
        ))}

        {/* Edge connector fingers, running off the board */}
        {edgeBus.map((net, i) => {
          const [, y] = net[net.length - 1];
          return (
            <rect
              key={i}
              x={EDGE_X}
              y={y - 6}
              width="48"
              height="12"
              rx="2"
              className="cf-finger"
            />
          );
        })}

        {/* Decoupling caps around the FPGA */}
        <Passive at={[670, 326]} />
        <Passive at={[806, 574]} />
        <Passive at={[852, 364]} vertical />
        <Passive at={[654, 574]} />

        {vias.map((at, i) => (
          <Via key={i} at={at} />
        ))}
      </g>

      {/* Current */}
      <g className="cf-current">
        {pulses.map((p, i) => {
          const s = pulseStyle(p);
          const d = toPath(p.net);
          const vars = {
            "--from": s.from,
            "--to": s.to,
            "--dur": `${s.duration.toFixed(2)}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties;
          return (
            <g
              key={i}
              style={vars}
              data-tone={p.tone ?? "signal"}
              data-desktop-only={p.desktopOnly ? "true" : undefined}
            >
              <path d={d} pathLength={UNITS} strokeDasharray={s.tail} className="cf-glow" />
              <path d={d} pathLength={UNITS} strokeDasharray={s.tail} className="cf-tail" />
              <path d={d} pathLength={UNITS} strokeDasharray={s.body} className="cf-body" />
              <path d={d} pathLength={UNITS} strokeDasharray={s.head} className="cf-head" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
