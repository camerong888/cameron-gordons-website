"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative PCB trace art: routes draw on like a board being laid out,
 * then signal pulses travel the traces on a loop (SMIL animateMotion).
 * Renders fully static under prefers-reduced-motion.
 */

// Orthogonal/45° routes in a 900x640 viewBox, PCB-style.
const TRACES = [
  "M 40 80 H 300 L 360 140 H 560 L 620 200 H 860",
  "M 40 200 H 220 L 280 260 H 500 L 560 320 H 860",
  "M 40 320 H 180 L 240 380 H 460 L 520 440 H 860",
  "M 40 440 H 260 L 320 500 H 540 L 600 560 H 860",
  "M 120 40 V 180 L 180 240 V 420 L 240 480 V 600",
  "M 700 40 V 120 L 640 180 V 360 L 700 420 V 600",
];

// Pads at trace endpoints/junctions.
const PADS: [number, number][] = [
  [40, 80], [860, 200], [40, 200], [860, 320], [40, 320], [860, 440],
  [40, 440], [860, 560], [120, 40], [240, 600], [700, 40], [700, 600],
  [360, 140], [280, 260], [520, 440], [600, 560],
];

export default function CircuitBoardSvg({
  className = "",
}: {
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 900 640"
      fill="none"
      aria-hidden
      className={className}
      role="presentation"
    >
      {TRACES.map((d, i) => (
        <g key={i}>
          {/* Faint full trace underneath */}
          <path d={d} stroke="var(--line)" strokeWidth="2" />
          {reduce ? (
            <path
              d={d}
              stroke="var(--copper)"
              strokeWidth="2"
              opacity="0.5"
            />
          ) : (
            <motion.path
              id={`hero-trace-${i}`}
              d={d}
              stroke="var(--copper)"
              strokeWidth="2"
              opacity="0.55"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.15 * i, ease: "easeInOut" }}
            />
          )}
        </g>
      ))}

      {PADS.map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="7"
            stroke="var(--copper)"
            strokeWidth="2"
            opacity="0.6"
          />
          <circle cx={cx} cy={cy} r="2.5" fill="var(--copper)" opacity="0.8" />
        </g>
      ))}

      {/* Signal pulses riding the first four traces */}
      {!reduce &&
        [0, 1, 2, 3].map((i) => (
          <circle key={i} r="4" fill="var(--signal)">
            <animateMotion
              dur={`${5 + i * 1.4}s`}
              begin={`${1.8 + i * 0.9}s`}
              repeatCount="indefinite"
              path={TRACES[i]}
            />
          </circle>
        ))}

      {/* An IC footprint for flavor */}
      <g opacity="0.5">
        <rect
          x="390"
          y="270"
          width="120"
          height="100"
          rx="4"
          stroke="var(--signal)"
          strokeWidth="2"
        />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line
              x1={405 + i * 30}
              y1="255"
              x2={405 + i * 30}
              y2="270"
              stroke="var(--signal)"
              strokeWidth="2"
            />
            <line
              x1={405 + i * 30}
              y1="370"
              x2={405 + i * 30}
              y2="385"
              stroke="var(--signal)"
              strokeWidth="2"
            />
          </g>
        ))}
        <circle cx="402" cy="282" r="3" fill="var(--signal)" />
      </g>
    </svg>
  );
}
