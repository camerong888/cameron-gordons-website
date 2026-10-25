import Link from "next/link";
import { highlights } from "@/data/highlights";
import Reveal from "@/components/ui/Reveal";

/** Four results as big numbers, each linking to the role behind it. */
export default function Highlights() {
  return (
    <ul className="grid gap-3.5 sm:grid-cols-2">
      {highlights.map((h, i) => (
        <li key={`${h.org}-${h.value}`}>
          <Reveal delay={(i % 2) * 70} className="h-full">
            <Link
              href={h.href}
              className="group flex h-full flex-col gap-1.5 rounded-[1.375rem] bg-tile p-6 transition-transform duration-150 ease-out active:scale-[0.985] md:p-9"
            >
              <span className="text-meta font-semibold text-ink-2 transition-colors group-hover:text-accent">
                {h.org} <span aria-hidden>›</span>
              </span>
              <span className="text-figure tabular-nums">{h.value}</span>
              <span className="mt-1 text-ink-2">{h.caption}</span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
