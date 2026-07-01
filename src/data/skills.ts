import type { SkillDomain } from "./types";

export const skillDomains: SkillDomain[] = [
  {
    key: "pcb",
    title: "PCB Design",
    skills: [
      { name: "High-Speed Digital Layout", level: 3 },
      { name: "Analog Circuit Design", level: 3 },
      { name: "Power Electronics", level: 3 },
      { name: "RF & Impedance Control", level: 2 },
      { name: "Design for Manufacturing", level: 3 },
      { name: "Signal & Power Integrity", level: 3 },
    ],
  },
  {
    key: "embedded",
    title: "Embedded Firmware",
    skills: [
      { name: "C / C++", level: 3 },
      { name: "STM32 / ARM Cortex", level: 3 },
      { name: "I2C · SPI · UART · CAN", level: 3 },
      { name: "Bluetooth LE", level: 2 },
      { name: "Bootloaders & Bring-up", level: 2 },
    ],
  },
  {
    key: "fpga",
    title: "FPGA & High-Speed Digital",
    skills: [
      { name: "FPGA Integration", level: 3 },
      { name: "High-Speed Memory (DDR)", level: 3 },
      { name: "Timing & Synchronization", level: 3 },
      { name: "Radiation-Tolerant Design", level: 2 },
      { name: "Receiver/Exciter Systems", level: 2 },
    ],
  },
  {
    key: "validation",
    title: "Test & Validation",
    skills: [
      { name: "Requirement Validation", level: 3 },
      { name: "Root Cause Analysis", level: 3 },
      { name: "Acceptance Test Procedures", level: 3 },
      { name: "EMC / Noise Debugging", level: 3 },
      { name: "Design of Experiments", level: 2 },
    ],
  },
  {
    key: "tools",
    title: "Tools & Software",
    skills: [
      { name: "Altium Designer", level: 3 },
      { name: "Python", level: 3 },
      { name: "MATLAB", level: 2 },
      { name: "PSpice", level: 2 },
      { name: "SolidWorks", level: 2 },
      { name: "Git · Jira · Confluence", level: 3 },
    ],
  },
];
