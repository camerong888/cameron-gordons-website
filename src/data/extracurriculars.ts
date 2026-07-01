import type { Experience } from "./types";

export const ner: Experience = {
  slug: "ner",
  company: "Northeastern Electric Racing",
  role: "Electrical Project Lead",
  location: "Boston, MA",
  start: "Sep 2019",
  end: "Aug 2023",
  sortKey: "2019-09",
  url: "https://electricracing.northeastern.edu/",
  logo: { src: "ner/ner-logo-white", alt: "Northeastern Electric Racing logo" },
  heroImage: {
    src: "ner/car",
    alt: "Northeastern Electric Racing formula-style electric vehicle",
  },
  summary:
    "Led a team of eight electrical engineers through complete design cycles on a formula-style electric race car — culminating in 1st Place Electric Vehicle at the IEEE Formula Hybrid+Electric 2021 competition.",
  bullets: [
    "Directed 8 undergraduate engineers through 3 complete hardware/software design cycles for a Formula SAE electric vehicle.",
    "Secured 1st Place Electric Vehicle at the IEEE-sponsored Formula Hybrid+Electric 2021 competition.",
    "Owned schedules, budgets, rules compliance, and design documentation across charging, dashboard, and telemetry subsystems.",
    "Coordinated across mechanical, software, and business teams to take designs from concept to a running race car.",
  ],
  skills: [
    "Technical Leadership",
    "Project Management",
    "Systems Integration",
    "Formula SAE",
  ],
  timelineHighlight:
    "Led 8 engineers to a 1st Place Electric Vehicle finish at IEEE Formula Hybrid+Electric 2021.",
  metrics: [
    { value: "1st", label: "place EV, Formula Hybrid 2021" },
    { value: "8", label: "engineers led" },
    { value: "3", label: "major projects delivered" },
  ],
};
