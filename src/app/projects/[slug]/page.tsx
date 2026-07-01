import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import DetailShell from "@/components/case-study/DetailShell";
import MetricCallouts from "@/components/case-study/MetricCallouts";
import ImageGallery from "@/components/case-study/ImageGallery";
import PrevNextNav from "@/components/case-study/PrevNextNav";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    openGraph: { title: project.title, description: project.tagline },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[i - 1] ?? null;
  const next = projects[i + 1] ?? null;

  const facts = (
    <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <dl className="space-y-4">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Year
          </dt>
          <dd className="mt-1 text-sm text-ink">{project.year}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Role
          </dt>
          <dd className="mt-1 text-sm text-ink">{project.role}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Context
          </dt>
          <dd className="mt-1 text-sm text-ink">{project.context}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Tech stack
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </dd>
        </div>
        {project.links?.length ? (
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
              Links
            </dt>
            <dd className="mt-1 space-y-1">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-mono text-sm text-signal hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>
    </div>
  );

  return (
    <DetailShell backHref="/#projects" backLabel="All projects">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
        {"// Project case study"}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-10">
          <Reveal>
            <p className="text-[15px] leading-relaxed text-muted">
              {project.overview}
            </p>
          </Reveal>

          {/* Facts card inline on mobile, sidebar on desktop */}
          <div className="lg:hidden">{facts}</div>

          <Reveal>
            <MetricCallouts metrics={project.metrics} />
          </Reveal>

          {project.sections.map((section) => (
            <Reveal key={section.heading}>
              <section>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {section.body}
                </p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section aria-label="Gallery">
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">
                Gallery
              </h2>
              <ImageGallery images={project.gallery} />
            </section>
          </Reveal>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">{facts}</div>
        </aside>
      </div>

      <div className="mt-14">
        <PrevNextNav
          prev={
            prev
              ? {
                  href: `/projects/${prev.slug}/`,
                  label: prev.title,
                  sublabel: prev.year,
                }
              : null
          }
          next={
            next
              ? {
                  href: `/projects/${next.slug}/`,
                  label: next.title,
                  sublabel: next.year,
                }
              : null
          }
        />
      </div>
    </DetailShell>
  );
}
