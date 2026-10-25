import type { SkillDomain } from "./types";

export const skillDomains: SkillDomain[] = [
  {
    key: "pcb",
    title: "PCB Design",
    skills: [
      "High-Speed Digital Layout",
      "Analog Circuit Design",
      "Power Electronics",
      "RF & Impedance Control",
      "Design for Manufacturing",
      "Signal & Power Integrity",
    ],
  },
  {
    key: "embedded",
    title: "Embedded Firmware",
    skills: [
      "C / C++",
      "STM32 / ARM Cortex",
      "I2C · SPI · UART · CAN",
      "Bluetooth LE",
      "Bootloaders & Bring-up",
    ],
  },
  {
    key: "fpga",
    title: "FPGA & High-Speed Digital",
    skills: [
      "FPGA Integration",
      "High-Speed Memory (DDR)",
      "Timing & Synchronization",
      "Radiation-Tolerant Design",
      "Receiver/Exciter Systems",
    ],
  },
  {
    key: "validation",
    title: "Test & Validation",
    skills: [
      "Requirement Validation",
      "Root Cause Analysis",
      "Acceptance Test Procedures",
      "EMC / Noise Debugging",
      "Design of Experiments",
    ],
  },
  {
    key: "tools",
    title: "Tools & Software",
    skills: [
      "Altium Designer",
      "Python",
      "MATLAB",
      "PSpice",
      "SolidWorks",
      "Git · Jira · Confluence",
    ],
  },
];
