import Link from "next/link";
import type { Project } from "@/data/types";
import { projectName } from "@/data/projects";
import Picture from "@/components/ui/Picture";

const press = "transition-transform duration-150 ease-out active:scale-[0.99]";
const zoom =
  "transition-transform duration-700 ease-out group-hover:scale-[1.03]";

/** The lead project: photo and story side by side, stacked on phones. */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={`group grid overflow-hidden rounded-[1.625rem] bg-tile md:grid-cols-2 ${press}`}
    >
      <div className="aspect-square overflow-hidden md:aspect-[4/5]">
        <Picture
          image={project.cover}
          sizes="(min-width: 768px) 520px, 100vw"
          className={`size-full object-cover ${zoom}`}
        />
      </div>
      <div className="grid content-center gap-3 p-7 md:p-14">
        <p className="text-meta text-ink-2">
          {project.year} · {project.context}
        </p>
        <h3 className="text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.024em]">
          {projectName(project)}
        </h3>
        <p className="text-lede text-ink-2">{project.tagline}</p>
        <span className="mt-1 text-accent">Read the case study ›</span>
      </div>
    </Link>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={`group grid grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-tile ${press}`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Picture
          image={project.cover}
          sizes="(min-width: 1128px) 510px, (min-width: 640px) 50vw, 100vw"
          className={`size-full object-cover ${zoom}`}
        />
      </div>
      <div className="grid content-start gap-1.5 px-6 pb-7 pt-5">
        <p className="text-meta text-ink-2">
          {project.year} · {project.context}
        </p>
        <h3 className="text-title">{projectName(project)}</h3>
        <p className="text-ink-2">{project.tagline}</p>
      </div>
    </Link>
  );
}
