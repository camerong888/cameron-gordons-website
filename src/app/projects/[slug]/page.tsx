import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { projects, getProject, projectName } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import Stage from "@/components/ui/Stage";
import DetailShell from "@/components/case-study/DetailShell";
import PageHeader from "@/components/case-study/PageHeader";
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

function Spec({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <dt className="text-meta text-ink-2">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
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

  return (
    <DetailShell
      crumbs={[
        { label: "Projects", href: "/#projects" },
        { label: projectName(project) },
      ]}
    >
      <PageHeader
        meta={`${project.year} · ${project.context}`}
        title={project.title}
        lede={project.tagline}
      />

      <Stage image={project.cover} priority />

      <dl className="grid gap-x-10 gap-y-6 border-b border-line py-8 md:grid-cols-2 md:py-10">
        <Spec label="Role">{project.role}</Spec>
        <Spec label="Stack">{project.tech.join(", ")}</Spec>
        {project.links?.length ? (
          <Spec label="Links" className="md:col-span-2">
            <span className="flex flex-wrap gap-x-6 gap-y-1">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hit-area text-accent hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </span>
          </Spec>
        ) : null}
      </dl>

      <Reveal>
        <MetricCallouts metrics={project.metrics} />
      </Reveal>

      <div className="border-t border-line py-10 md:py-14">
        <div className="grid max-w-[48.75rem] gap-10 md:gap-12">
          <Reveal>
            <p className="text-lede text-pretty">{project.overview}</p>
          </Reveal>
          {project.sections.map((section) => (
            <Reveal key={section.heading}>
              <section className="grid gap-3">
                <h2 className="text-heading">{section.heading}</h2>
                <p className="text-ink-2">{section.body}</p>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <section
          aria-labelledby="gallery"
          className="border-t border-line py-10 md:py-14"
        >
          <h2 id="gallery" className="mb-6 text-heading">
            Gallery
          </h2>
          <ImageGallery images={project.gallery} />
        </section>
      </Reveal>

      <PrevNextNav
        prev={
          prev
            ? {
                href: `/projects/${prev.slug}/`,
                label: projectName(prev),
                sublabel: prev.year,
              }
            : null
        }
        next={
          next
            ? {
                href: `/projects/${next.slug}/`,
                label: projectName(next),
                sublabel: next.year,
              }
            : null
        }
      />
    </DetailShell>
  );
}
