"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { TimelineEvent } from "@/data/types";
import TimelineEntry from "./TimelineEntry";

/**
 * Vertical career timeline. The spine "energizes" (fills) as the user
 * scrolls, like a trace being routed; entry nodes are PCB pads that
 * light up as they enter the viewport. Desktop alternates cards
 * left/right of a centered spine; mobile uses a left rail.
 */
export default function CareerTimeline({
  events,
}: {
  events: TimelineEvent[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.35"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative">
      {/* Static spine */}
      <div
        aria-hidden
        className="absolute bottom-2 top-2 w-px bg-line left-[15px] lg:left-1/2 lg:-translate-x-1/2"
      />
      {/* Energized spine overlay */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { scaleY }}
        className="absolute bottom-2 top-2 w-px origin-top bg-gradient-to-b from-signal via-copper to-copper left-[15px] lg:left-1/2 lg:-translate-x-1/2"
      />

      <ol className="space-y-10 lg:space-y-14">
        {events.map((event, i) => (
          <TimelineEntry key={`${event.sortKey}-${event.title}`} event={event} index={i} />
        ))}
      </ol>
    </div>
  );
}
