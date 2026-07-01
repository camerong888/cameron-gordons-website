import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experiences, getExperience } from "@/data/experience";
import Badge from "@/components/ui/Badge";
import Picture from "@/components/ui/Picture";
import Reveal from "@/components/ui/Reveal";
import DetailShell from "@/components/case-study/DetailShell";
import MetricCallouts from "@/components/case-study/MetricCallouts";
import PrevNextNav from "@/components/case-study/PrevNextNav";

export const dynamicParams = false;

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const exp = getExperience((await params).slug);
  if (!exp) return {};
  const title = `${exp.role} at ${exp.company}`;
  return {
    title,
    description: exp.summary,
    openGraph: { title, description: exp.summary },
  };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const exp = getExperience((await params).slug);
  if (!exp) notFound();

  const i = experiences.findIndex((e) => e.slug === exp.slug);
  const newer = experiences[i - 1] ?? null;
  const older = experiences[i + 1] ?? null;

  return (
    <DetailShell backHref="/#experience" backLabel="Career timeline">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {"// Experience"}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          {exp.company}
        </h1>
        {exp.end === null && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal-soft px-3 py-1 font-mono text-xs text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            Current
          </span>
        )}
      </div>
      <p className="mt-2 font-mono text-sm text-copper">{exp.role}</p>
      <p className="mt-1 font-mono text-xs text-muted">
        {exp.start} – {exp.end ?? "Present"} · {exp.location}
        {exp.url ? (
          <>
            {" · "}
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal hover:underline"
            >
              {new URL(exp.url).hostname.replace("www.", "")} ↗
            </a>
          </>
        ) : null}
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-muted">
              {exp.summary}
            </p>
          </Reveal>

          {exp.metrics?.length ? (
            <Reveal>
              <MetricCallouts metrics={exp.metrics} />
            </Reveal>
          ) : null}

          <Reveal>
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                What I did
              </h2>
              <ul className="mt-4 space-y-3">
                {exp.bullets.map((bullet) => (
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
              {exp.skills.map((s) => (
                <Badge key={s} tone="copper">
                  {s}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>

        {exp.heroImage ? (
          <Reveal className="lg:pt-2">
            <figure className="overflow-hidden rounded-lg border border-line bg-surface">
              <Picture
                image={exp.heroImage}
                sizes="(max-width: 1024px) 100vw, 380px"
                className="w-full object-cover"
              />
              <figcaption className="border-t border-line p-3 font-mono text-[11px] text-muted">
                {exp.heroImage.alt}
              </figcaption>
            </figure>
          </Reveal>
        ) : null}
      </div>

      <div className="mt-14">
        <PrevNextNav
          prev={
            older
              ? {
                  href: `/experience/${older.slug}/`,
                  label: older.company,
                  sublabel: `${older.start} – ${older.end ?? "Present"}`,
                }
              : null
          }
          next={
            newer
              ? {
                  href: `/experience/${newer.slug}/`,
                  label: newer.company,
                  sublabel: `${newer.start} – ${newer.end ?? "Present"}`,
                }
              : null
          }
        />
      </div>
    </DetailShell>
  );
}
