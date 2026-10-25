import type { Metadata } from "next";
import { ner } from "@/data/extracurriculars";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Stage from "@/components/ui/Stage";
import ProjectCard from "@/components/projects/ProjectCard";
import DetailShell from "@/components/case-study/DetailShell";
import PageHeader from "@/components/case-study/PageHeader";
import MetricCallouts from "@/components/case-study/MetricCallouts";
import ImageGallery from "@/components/case-study/ImageGallery";

export const metadata: Metadata = {
  title: "Northeastern Electric Racing",
  description: ner.summary,
};

const teamProjects = projects.filter((p) => p.context === ner.company);

export default function NerPage() {
  return (
    <>
      <DetailShell
        crumbs={[
          { label: "Leadership", href: "/#leadership" },
          { label: ner.company },
        ]}
      >
        <PageHeader
          meta={
            <>
              {ner.start} – {ner.end} · {ner.location} ·{" "}
              <a
                href={ner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                electricracing.northeastern.edu ↗
              </a>
            </>
          }
          title={ner.company}
          subtitle={ner.role}
          lede={ner.summary}
        />

        {ner.heroImage ? (
          <Reveal>
            <Stage image={ner.heroImage} priority />
          </Reveal>
        ) : null}

        <Reveal>
          <MetricCallouts metrics={ner.metrics ?? []} />
        </Reveal>

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
                {ner.bullets.map((bullet) => (
                  <li key={bullet} className="border-b border-line py-3.5">
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-small text-ink-2">
                {ner.skills.join(" · ")}
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            aria-labelledby="gallery"
            className="border-t border-line pt-10 md:pt-14"
          >
            <h2 id="gallery" className="mb-6 text-heading">
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
      </DetailShell>

      <Section alt labelledBy="team-projects">
        <SectionHeading id="team-projects" title="Related projects" />
        <div className="grid gap-4.5 lg:grid-cols-3">
          {teamProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70} className="grid">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
