"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { TimelineEvent } from "@/data/types";
import Badge from "@/components/ui/Badge";

const kindColor: Record<TimelineEvent["kind"], string> = {
  role: "var(--copper)",
  education: "var(--signal)",
  milestone: "var(--signal)",
};

const kindLabel: Record<TimelineEvent["kind"], string> = {
  role: "ROLE",
  education: "EDUCATION",
  milestone: "MILESTONE",
};

export default function TimelineEntry({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const reduce = useReducedMotion();
  const left = index % 2 === 0; // desktop: even entries left of spine
  const color = kindColor[event.kind];

  const card = (
    <div
      className={`group rounded-lg border bg-surface p-5 transition-colors sm:p-6 ${
        event.current
          ? "border-signal/40 shadow-[0_0_28px_-8px_var(--signal)]"
          : "border-line hover:border-copper/50"
      }`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="font-mono text-[11px] tracking-widest text-muted">
          {kindLabel[event.kind]}
        </span>
        {event.current && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            CURRENT
          </span>
        )}
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink">
        {event.title}
      </h3>
      <p className="mt-0.5 font-mono text-[13px] text-copper">
        {event.subtitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {event.highlight}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {event.href && (
        <p className="mt-4 font-mono text-xs text-signal opacity-80 transition-opacity group-hover:opacity-100">
          Read more →
        </p>
      )}
    </div>
  );

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.21, 0.65, 0.35, 1] }}
      className="relative pl-11 lg:grid lg:grid-cols-[1fr_56px_1fr] lg:items-start lg:pl-0"
    >
      {/* PCB-pad node on the spine */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { scale: 0.4, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center lg:left-1/2 lg:-translate-x-1/2"
      >
        <span
          className="absolute inset-0 rounded-full border-2 bg-bg"
          style={{ borderColor: color }}
        />
        <span
          className="relative h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      </motion.span>

      {/* Date: sits above card on mobile, opposite side of spine on desktop */}
      <div
        className={`mb-2 lg:mb-0 lg:pt-7 ${
          left
            ? "lg:order-3 lg:pl-8 lg:text-left"
            : "lg:order-1 lg:pr-8 lg:text-right"
        }`}
      >
        <time className="font-mono text-xs tracking-widest text-muted">
          {event.dateLabel}
        </time>
      </div>

      <span aria-hidden className="hidden lg:order-2 lg:block" />

      <div className={left ? "lg:order-1 lg:pr-8" : "lg:order-3 lg:pl-8"}>
        {event.href ? (
          <Link href={event.href} className="block focus-visible:outline-none">
            {card}
          </Link>
        ) : (
          card
        )}
      </div>
    </motion.li>
  );
}
