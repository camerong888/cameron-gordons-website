import type { CSSProperties } from "react";
import Button from "@/components/ui/Button";
import MoreLink from "@/components/ui/MoreLink";
import CircuitField from "./CircuitField";

const rise = (n: number) => ({ "--rise": n }) as CSSProperties;

export default function PcbHero() {
  return (
    <section className="pcb-hero relative flex min-h-[min(100svh,50rem)] items-center overflow-hidden">
      {/* The board. It masks itself away from the copy (see globals.css), so
          no readability overlay is needed on top of it. */}
      <CircuitField />

      {/* `--hero-pad` comes from .pcb-hero in globals.css: 4rem while the
          board sits beside the copy, and the height of the board's band once
          it moves to the foot of the hero on narrower screens. */}
      <div className="wrap relative z-10 pb-(--hero-pad) pt-29">
        <div className="grid max-w-[37.5rem] gap-5">
          <h1
            className="rise text-[clamp(1.0625rem,1rem+0.3vw,1.3125rem)] font-semibold tracking-[-0.014em]"
            style={rise(0)}
          >
            Cameron Gordon
          </h1>
          <p className="rise text-display text-balance" style={rise(1)}>
            Electronics built for space, defense, and everywhere hardware
            can’t fail.
          </p>
          <p className="rise text-lede text-ink-2" style={rise(2)}>
            <strong className="font-semibold text-ink">
              Hardware engineer at Draper.
            </strong>{" "}
            I design environmentally hardened, high-speed digital circuit
            boards, integrating FPGAs and high-speed memory into systems that
            survive orbit, the battlefield, and everything in between.
          </p>
          <div
            className="rise mt-2.5 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={rise(3)}
          >
            <Button href="/resume/">View résumé</Button>
            <MoreLink href="/#contact">Get in touch</MoreLink>
          </div>
        </div>
      </div>
    </section>
  );
}
