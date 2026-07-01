import Link from "next/link";
import type { Project } from "@/data/types";
import Badge from "@/components/ui/Badge";
import Picture from "@/components/ui/Picture";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group block overflow-hidden rounded-lg border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-copper/60 hover:shadow-[0_8px_40px_-12px_var(--copper)]"
    >
      <div className="aspect-video overflow-hidden border-b border-line bg-surface-2">
        <Picture
          image={project.cover}
          sizes="(max-width: 768px) 100vw, 560px"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted">
            {project.year}
          </span>
        </div>
        <p className="mt-1 font-mono text-xs text-signal">{project.context}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
