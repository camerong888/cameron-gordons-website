export interface ImageRef {
  /** Key into image-manifest.json, e.g. "tesla/hq" */
  src: string;
  alt: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface LinkRef {
  label: string;
  href: string;
}

export interface Experience {
  slug: string;
  company: string;
  role: string;
  location: string;
  /** Display string, e.g. "Apr 2026" */
  start: string;
  /** null = present */
  end: string | null;
  /** ISO-ish sort key for ordering, e.g. "2026-04" */
  sortKey: string;
  url?: string;
  logo?: ImageRef;
  heroImage?: ImageRef;
  summary: string;
  bullets: string[];
  skills: string[];
  /** One-liner shown on the timeline card */
  timelineHighlight: string;
  metrics?: Metric[];
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  /** e.g. "Personal project" or "Northeastern Electric Racing" */
  context: string;
  tech: string[];
  overview: string;
  sections: ProjectSection[];
  metrics: Metric[];
  cover: ImageRef;
  gallery: ImageRef[];
  links?: LinkRef[];
}

export interface SkillDomain {
  key: string;
  title: string;
  /** 1–3 proficiency dots per skill */
  skills: { name: string; level: 1 | 2 | 3 }[];
}

export type TimelineKind = "role" | "education" | "milestone";

export interface TimelineEvent {
  kind: TimelineKind;
  /** e.g. "Apr 2026 – Present" */
  dateLabel: string;
  sortKey: string;
  title: string;
  subtitle: string;
  highlight: string;
  tags: string[];
  href?: string;
  current?: boolean;
}
