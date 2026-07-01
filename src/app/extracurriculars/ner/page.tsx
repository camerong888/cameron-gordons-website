import type { Metadata } from "next";
import Link from "next/link";
import { ner } from "@/data/extracurriculars";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import DetailShell from "@/components/case-study/DetailShell";
import MetricCallouts from "@/components/case-study/MetricCallouts";
import ImageGallery from "@/components/case-study/ImageGallery";

export const metadata: Metadata = {
  title: "Northeastern Electric Racing",
  description: ner.summary,
};

export default function NerPage() {
  return (
    <DetailShell backHref="/#leadership" backLabel="Home">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {"// Leadership"}
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
        {ner.company}
      </h1>
      <p className="mt-2 font-mono text-sm text-copper">{ner.role}</p>
      <p className="mt-1 font-mono text-xs text-muted">
        {ner.start} – {ner.end} · {ner.location} ·{" "}
        <a
          href={ner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-signal hover:underline"
        >
          electricracing.northeastern.edu ↗
        </a>
      </p>

      <div className="mt-10 space-y-10">
        <Reveal>
          <p className="max-w-3xl text-[15px] leading-relaxed text-muted">
            {ner.summary}
          </p>
        </Reveal>

        <Reveal>
          <MetricCallouts metrics={ner.metrics ?? []} />
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              What I did
            </h2>
            <ul className="mt-4 max-w-3xl space-y-3">
              {ner.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[9px] h-px w-4 shrink-0 bg-copper"
                  />
                  <span className="text-[15px] leading-relaxed text-muted">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-2">
            {ner.skills.map((s) => (
              <Badge key={s} tone="copper">
                {s}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <section aria-label="Gallery">
            <h2 className="mb-4 font-display text-xl font-semibold text-ink">
              Gallery
            </h2>
            <ImageGallery
              images={[
                {
                  src: "ner/car",
                  alt: "Northeastern Electric Racing formula-style electric vehicle",
                },
                {
                  src: "ner/team",
                  alt: "Northeastern Electric Racing team",
                },
              ]}
            />
          </section>
        </Reveal>

        <Reveal>
          <p className="font-mono text-xs text-muted">
            Related projects:{" "}
            <Link
              href="/projects/telemetry-communication-board/"
              className="text-signal hover:underline"
            >
              Telemetry Board
            </Link>
            {" · "}
            <Link
              href="/projects/ev-dashboard/"
              className="text-signal hover:underline"
            >
              EV Dashboard
            </Link>
            {" · "}
            <Link
              href="/projects/ev-charger/"
              className="text-signal hover:underline"
            >
              300VDC Charger
            </Link>
          </p>
        </Reveal>
      </div>
    </DetailShell>
  );
}
