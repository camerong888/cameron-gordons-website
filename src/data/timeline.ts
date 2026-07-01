import type { TimelineEvent } from "./types";
import { experiences } from "./experience";
import { ner } from "./extracurriculars";

const roleEvents: TimelineEvent[] = experiences.map((e) => ({
  kind: "role",
  dateLabel: `${e.start} – ${e.end ?? "Present"}`,
  sortKey: e.sortKey,
  title: e.role,
  subtitle: `${e.company} · ${e.location}`,
  highlight: e.timelineHighlight,
  tags: e.skills.slice(0, 3),
  href: `/experience/${e.slug}/`,
  current: e.end === null,
}));

const otherEvents: TimelineEvent[] = [
  {
    kind: "education",
    dateLabel: "2024",
    sortKey: "2024-08",
    title: "M.S. Electrical & Computer Engineering",
    subtitle: "Northeastern University · 4.0 GPA",
    highlight:
      "Graduate focus on hardware and embedded systems, capped by the Summit Signal satellite SOS device.",
    tags: ["4.0 GPA"],
    href: "/projects/iridium-iot/",
  },
  {
    kind: "education",
    dateLabel: "2023",
    sortKey: "2023-08",
    title: "B.S. Electrical Engineering",
    subtitle: "Northeastern University · Summa Cum Laude",
    highlight:
      "Five-year co-op program combining coursework with 21 months of industry experience.",
    tags: ["Summa Cum Laude"],
  },
  {
    kind: "milestone",
    dateLabel: "2021",
    sortKey: "2021-05",
    title: "1st Place Electric Vehicle",
    subtitle: "IEEE Formula Hybrid+Electric Competition",
    highlight:
      "Championship finish for Northeastern Electric Racing's formula-style EV.",
    tags: ["Formula SAE"],
    href: "/extracurriculars/ner/",
  },
  {
    kind: "role",
    dateLabel: `${ner.start} – ${ner.end}`,
    sortKey: ner.sortKey,
    title: ner.role,
    subtitle: `${ner.company} · ${ner.location}`,
    highlight: ner.timelineHighlight,
    tags: ner.skills.slice(0, 3),
    href: "/extracurriculars/ner/",
  },
];

/** Newest first. */
export const timelineEvents: TimelineEvent[] = [
  ...roleEvents,
  ...otherEvents,
].sort((a, b) => (a.sortKey < b.sortKey ? 1 : -1));
