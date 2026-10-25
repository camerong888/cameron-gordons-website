import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experiences, getExperience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import Stage from "@/components/ui/Stage";
import DetailShell from "@/components/case-study/DetailShell";
import PageHeader from "@/components/case-study/PageHeader";
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
    <DetailShell
      crumbs={[
        { label: "Experience", href: "/#experience" },
        { label: exp.company },
      ]}
    >
      <PageHeader
        meta={
          <>
            {exp.start} – {exp.end ?? "Present"} · {exp.location}
            {exp.url ? (
              <>
                {" · "}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {new URL(exp.url).hostname.replace("www.", "")} ↗
                </a>
              </>
            ) : null}
          </>
        }
        title={exp.company}
        subtitle={exp.role}
        lede={exp.summary}
      />

      {exp.heroImage ? (
        <Reveal>
          <Stage image={exp.heroImage} caption={exp.heroImage.alt} priority />
        </Reveal>
      ) : null}

      {exp.metrics?.length ? (
        <Reveal>
          <MetricCallouts metrics={exp.metrics} />
        </Reveal>
      ) : null}

      <Reveal>
        <section
          aria-labelledby="what-i-did"
          className="border-t border-line py-10 md:py-14"
        >
          <div className="grid max-w-[48.75rem] gap-5">
            <h2 id="what-i-did" className="text-heading">
              What I did
            </h2>
            <ul className="border-t border-line">
              {exp.bullets.map((bullet) => (
                <li key={bullet} className="border-b border-line py-3.5">
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-small text-ink-2">{exp.skills.join(" · ")}</p>
          </div>
        </section>
      </Reveal>

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
    </DetailShell>
  );
}
