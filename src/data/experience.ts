import type { Experience } from "./types";

/** Newest first. */
export const experiences: Experience[] = [
  {
    slug: "draper",
    company: "Draper",
    role: "Hardware Engineer, MTS2",
    location: "Cambridge, MA",
    start: "Apr 2026",
    end: null,
    sortKey: "2026-04",
    url: "https://www.draper.com/",
    summary:
      "Designing environmentally hardened, high-speed digital circuit boards for systems that must perform in the harshest environments on and off the planet — from space to military applications.",
    bullets: [
      "Design high-speed digital circuit boards engineered to survive extreme environments, including space radiation, thermal cycling, shock, and vibration.",
      "Integrate FPGAs and high-speed memory into dense, mission-critical board designs, managing signal integrity and power delivery across high-speed interfaces.",
      "Carry designs through the full lifecycle — architecture, schematic capture, layout oversight, bring-up, and environmental qualification — alongside firmware, mechanical, and systems teams.",
    ],
    skills: [
      "High-Speed Digital Design",
      "FPGA Integration",
      "High-Speed Memory",
      "Signal Integrity",
      "Radiation & Environmental Hardening",
    ],
    timelineHighlight:
      "Environmentally hardened high-speed digital design — FPGAs and high-speed memory for space and defense systems.",
  },
  {
    slug: "raytheon",
    company: "Raytheon",
    role: "Hardware Engineer II",
    location: "Woburn, MA",
    start: "Jan 2025",
    end: "Mar 2026",
    sortKey: "2025-01",
    url: "https://www.rtx.com/",
    logo: { src: "raytheon/raytheon-logo", alt: "Raytheon logo" },
    heroImage: {
      src: "raytheon/sbx",
      alt: "Sea-Based X-Band Radar (SBX) platform at sea",
    },
    summary:
      "Led receiver/exciter hardware and software integration on the Sea-Based X-Band Radar (SBX), a cornerstone of a $2.2B missile defense program.",
    bullets: [
      "Led system integration of the X-band Digital Receiver/Exciter (DREX) hardware and software upgrade, delivering on schedule for a $2.2B radar modernization program.",
      "Validated 512 system design requirements by authoring and executing a custom acceptance test procedure.",
      "Diagnosed system timing issues through signal-path analysis and drove firmware and software fixes that improved synchronization accuracy by 30%.",
      "Root-caused recurring diagnostic failures and implemented corrective actions that raised diagnostic pass rates by 200%, improving fleet reliability.",
    ],
    skills: [
      "System Integration",
      "Requirement Validation",
      "Signal Path Analysis",
      "Root Cause Analysis",
      "Radar Systems",
    ],
    timelineHighlight:
      "Led DREX receiver/exciter integration for the Sea-Based X-Band Radar on a $2.2B missile defense program.",
    metrics: [
      { value: "$2.2B", label: "program supported" },
      { value: "512", label: "requirements validated" },
      { value: "+30%", label: "sync accuracy" },
    ],
  },
  {
    slug: "redwire",
    company: "Redwire Space",
    role: "Hardware & Embedded Software Engineering Intern",
    location: "Marlborough, MA",
    start: "May 2024",
    end: "Aug 2024",
    sortKey: "2024-05",
    url: "https://www.redwirespace.com/",
    logo: { src: "redwire/redwire-logo", alt: "Redwire Space logo" },
    heroImage: {
      src: "redwire/sun-sensor",
      alt: "Redwire quad sun sensor for spacecraft attitude determination",
    },
    summary:
      "Owned the end-to-end design of a new Quad Sun Sensor product line for LEO satellites — electrical design, embedded software, and validation — achieving first-spin hardware success.",
    bullets: [
      "Designed low-cost, highly scalable analog and digital Quad Sun Sensor (QSS) circuits for LEO satellites, cutting unit cost ~70% versus the existing product line while preserving flight performance.",
      "Achieved first-spin hardware success by owning the full design cycle: schematic capture, layout, embedded firmware, and hardware validation.",
      "Developed Python/C++ calibration algorithms and mathematical models converting quadrant photodiode response into precise sun angles, improving effective sensor accuracy by 250%.",
      "Authored space-grade engineering documentation — part stress, reliability, derating, and thermal analyses — to flight-program standards.",
    ],
    skills: [
      "Analog Circuit Design",
      "Embedded C/C++",
      "Python",
      "Space-Grade Design",
      "Sensor Calibration",
    ],
    timelineHighlight:
      "First-spin success on a new quad sun sensor for LEO satellites at ~70% lower unit cost.",
    metrics: [
      { value: "~70%", label: "unit cost reduction" },
      { value: "1st spin", label: "hardware success" },
      { value: "+250%", label: "sensor accuracy" },
    ],
  },
  {
    slug: "liberty-defense",
    company: "Liberty Defense",
    role: "Altium Design Engineering Consultant",
    location: "Wilmington, MA",
    start: "May 2023",
    end: "Jun 2023",
    sortKey: "2023-05",
    url: "https://libertydefense.com/",
    logo: {
      src: "liberty-defense/liberty-defense-logo",
      alt: "Liberty Defense logo",
    },
    heroImage: {
      src: "liberty-defense/hexwave",
      alt: "HEXWAVE walk-through security screening portal",
    },
    summary:
      "Built the RF component library foundation for HEXWAVE, a next-generation AI-driven walk-through security scanner.",
    bullets: [
      "Built a unified RF part library in Altium Schematic and PCB Designer, saving an estimated 350+ engineering hours per year across teams and projects.",
      "Created and validated 25 impedance-controlled RF IC symbols and footprints used in the HEXWAVE next-generation body scanner, which pairs millimeter-wave imaging with AI detection.",
    ],
    skills: [
      "Altium Designer",
      "RF Design",
      "Library Management",
      "Impedance Control",
    ],
    timelineHighlight:
      "Unified RF part library for the HEXWAVE scanner — 350+ engineering hours saved per year.",
    metrics: [
      { value: "350+", label: "hours saved / year" },
      { value: "25", label: "RF footprints validated" },
    ],
  },
  {
    slug: "tesla",
    company: "Tesla",
    role: "Display Electrical Engineering Co-op",
    location: "Palo Alto, CA",
    start: "Jan 2022",
    end: "Aug 2022",
    sortKey: "2022-01",
    url: "https://www.tesla.com/",
    heroImage: {
      src: "tesla/hq",
      alt: "Tesla headquarters in Palo Alto, California",
    },
    summary:
      "Redesigned display circuit boards now shipping in Model 3, Y, S, and X production vehicles — from schematic through validation and release to manufacturing.",
    bullets: [
      "Redesigned display PCBAs for Model 3/Y/S/X production vehicles — schematic, layout, and validation — with the boards released to mass manufacturing.",
      "Designed out end-of-life, supply-chain-constrained ICs while improving thermal management and signal integrity, cutting board cost by over 15%.",
      "Optimized mass-production validation through hundreds of Design of Experiments (DOEs) with global vendors, cutting validation time and boosting throughput 15%.",
      "Scripted firmware and validation tooling to accelerate board bring-up across display variants.",
    ],
    skills: [
      "PCB Design",
      "Design for Manufacturing",
      "Signal Integrity",
      "Thermal Management",
      "Validation Engineering",
    ],
    timelineHighlight:
      "Display boards redesigned and released to manufacturing for Model 3/Y/S/X production vehicles.",
    metrics: [
      { value: ">15%", label: "board cost reduction" },
      { value: "+15%", label: "validation throughput" },
      { value: "4", label: "vehicle programs" },
    ],
  },
  {
    slug: "fresenius",
    company: "Fresenius Medical Care",
    role: "R&D Electrical Engineering Co-op",
    location: "Lawrence, MA",
    start: "Jan 2021",
    end: "Aug 2021",
    sortKey: "2021-01",
    url: "https://www.nxstage.com/",
    logo: { src: "fresenius/nxstage-logo", alt: "NxStage logo" },
    heroImage: {
      src: "fresenius/nxone",
      alt: "NxStage home dialysis machine",
    },
    summary:
      "Designed custom embedded hardware for the next generation of home dialysis machines, where reliability is a matter of patient safety.",
    bullets: [
      "Developed a custom embedded device that automated hardware validation for next-generation dialysis platforms.",
      "Root-caused high-speed bus noise through circuit modeling and measurement, then implemented fixes that reduced noise by 75%.",
      "Designed bespoke embedded circuit boards supporting R&D of life-critical medical devices.",
    ],
    skills: [
      "Embedded Hardware",
      "EMC / Noise Debugging",
      "Circuit Modeling",
      "Medical Devices",
    ],
    timelineHighlight:
      "Cut high-speed bus noise 75% on life-critical dialysis machine electronics.",
    metrics: [
      { value: "-75%", label: "high-speed bus noise" },
    ],
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}
