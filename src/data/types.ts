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
  /** One line of impact, shown under the role in the home page's list */
  timelineHighlight: string;
  metrics?: Metric[];
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  /** "Name — what it is"; cards show the name alone */
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
  skills: string[];
}

/** One result in the home page's Highlights band. */
export interface Highlight {
  /** Where it happened, shown above the number */
  org: string;
  value: string;
  caption: string;
  /** The page that backs it up */
  href: string;
}

export interface Education {
  degree: string;
  school: string;
  /** e.g. "4.0 GPA" */
  honors: string;
  year: string;
  note: string;
  href?: string;
}
