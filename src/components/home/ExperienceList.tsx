import Link from "next/link";
import type { ReactNode } from "react";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import Reveal from "@/components/ui/Reveal";

// Cells of a .role-row (globals.css): stacked on phones, four columns wide.
const cell = {
  co: "text-title [grid-area:co]",
  role: "[grid-area:role]",
  when: "self-start whitespace-nowrap pt-1 text-meta text-ink-2 tabular-nums [grid-area:when] min-[52rem]:text-right",
  note: "text-small text-ink-2 [grid-area:note]",
  chev: "hidden self-center text-xl text-ink-2 [grid-area:chev] min-[52rem]:block",
};
const linkRow =
  "role-row transition-[background-color,transform] duration-150 ease-out hover:bg-hover active:scale-[0.995]";

function Row({ href, children }: { href?: string; children: ReactNode }) {
  return (
    <li className="border-b border-line">
      {href ? (
        <Link href={href} className={linkRow}>
          {children}
          <span aria-hidden className={cell.chev}>
            ›
          </span>
        </Link>
      ) : (
        <div className="role-row">{children}</div>
      )}
    </li>
  );
}

/** Roles, then degrees: one scannable row each, details a click away. */
export default function ExperienceList() {
  return (
    <>
      <Reveal>
        <ol className="border-t border-line">
          {experiences.map((e) => (
            <Row key={e.slug} href={`/experience/${e.slug}/`}>
              <span className={cell.co}>{e.company}</span>
              <span className={cell.role}>{e.role}</span>
              <span className={cell.when}>
                {e.start} – {e.end ?? "Present"}
              </span>
              <span className={cell.note}>{e.timelineHighlight}</span>
            </Row>
          ))}
        </ol>
      </Reveal>

      <Reveal>
        <h3 className="mb-4 mt-12 text-title md:mt-16">Education</h3>
        <ol className="border-t border-line">
          {education.map((d) => (
            <Row key={d.degree} href={d.href}>
              <span className={cell.co}>{d.school}</span>
              <span className={cell.role}>
                {d.degree} · {d.honors}
              </span>
              <span className={cell.when}>{d.year}</span>
              <span className={cell.note}>{d.note}</span>
            </Row>
          ))}
        </ol>
      </Reveal>
    </>
  );
}
