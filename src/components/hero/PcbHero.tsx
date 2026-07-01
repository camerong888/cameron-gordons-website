"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import CircuitBoardSvg from "./CircuitBoardSvg";

const fadeUp = (reduce: boolean, delay: number) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.21, 0.65, 0.35, 1] as const },
      };

export default function PcbHero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Trace art: right half on desktop, faint full-bleed on mobile */}
      <CircuitBoardSvg className="pointer-events-none absolute -right-24 top-1/2 hidden h-[130%] w-auto -translate-y-1/2 opacity-70 lg:block" />
      <CircuitBoardSvg className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 lg:hidden" />

      {/* Readability gradient over the art */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.25em] text-signal sm:text-sm"
          {...fadeUp(reduce, 0)}
        >
          {"// Cameron Gordon — Hardware Engineer"}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl"
          {...fadeUp(reduce, 0.1)}
        >
          Electronics built for
          <span className="text-copper"> space</span>,
          <span className="text-copper"> defense</span>, and everywhere
          hardware can&apos;t fail.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          {...fadeUp(reduce, 0.2)}
        >
          I design environmentally hardened, high-speed digital circuit boards
          — integrating FPGAs and high-speed memory into systems that survive
          orbit, the battlefield, and everything in between.
        </motion.p>

        <motion.div
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 backdrop-blur"
          {...fadeUp(reduce, 0.3)}
        >
          <span className="relative flex h-2.5 w-2.5" aria-hidden>
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            )}
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-xs text-muted sm:text-[13px]">
            Hardware Engineer MTS2 @ <span className="text-ink">Draper</span> ·
            Cambridge, MA
          </span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          {...fadeUp(reduce, 0.4)}
        >
          <Button href="/#experience">View experience ↓</Button>
          <Button href="/#projects" variant="outline">
            Projects
          </Button>
          <Button href="/resume/" variant="outline">
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
