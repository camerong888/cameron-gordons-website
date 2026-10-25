import type { Highlight } from "./types";

/**
 * The four results under the hero. Each number comes from an experience
 * entry (experience.ts) and links to it; keep the two in step.
 */
export const highlights: Highlight[] = [
  {
    org: "Raytheon",
    value: "$2.2B",
    caption:
      "Radar modernization program. I led integration of its digital receiver/exciter upgrade.",
    href: "/experience/raytheon/",
  },
  {
    org: "Raytheon",
    value: "512",
    caption:
      "System requirements validated with an acceptance test procedure I wrote and ran.",
    href: "/experience/raytheon/",
  },
  {
    org: "Redwire Space",
    value: "~70%",
    caption:
      "Lower unit cost for a new LEO sun sensor, with first-spin hardware success.",
    href: "/experience/redwire/",
  },
  {
    org: "Tesla",
    value: "4",
    caption:
      "Vehicle lines shipping display boards I redesigned: Model 3, Y, S and X.",
    href: "/experience/tesla/",
  },
];
