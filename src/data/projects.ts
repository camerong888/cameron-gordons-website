import type { Project } from "./types";

/** Newest first — order drives grid layout and prev/next navigation. */
export const projects: Project[] = [
  {
    slug: "iridium-iot",
    title: "Summit Signal — Iridium IoT SOS Device",
    tagline:
      "Handheld satellite SOS beacon with 100% global coverage — no cell network required.",
    year: "2024",
    role: "Sole designer — hardware, firmware, and system architecture",
    context: "Personal project · M.S. capstone",
    tech: [
      "Altium Designer",
      "Teensy 4.1",
      "C++",
      "Iridium SBD",
      "GNSS",
      "Li-Ion Power Path",
      "I2C / UART",
    ],
    overview:
      "Summit Signal is a handheld satellite communicator built for explorers who go beyond cellular coverage. It relays live location, heading, and SOS messages from anywhere on Earth over the Iridium satellite network, pairing a custom-designed PCB with cloud connectivity through AWS.",
    sections: [
      {
        heading: "Embedded architecture",
        body: "A Teensy 4.1 microcontroller runs custom C++ firmware that orchestrates the RockBLOCK 9603 Iridium transceiver for short-burst-data uplinks with true pole-to-pole coverage, a SAM-M10Q GNSS module with integrated patch antenna for live positioning, and an IMU for motion and heading data. Telemetry — location, heading, speed — is continuously logged to a micro SD card for post-trip analysis, with I2C and UART buses tying the sensor suite together.",
      },
      {
        heading: "Power architecture",
        body: "A priority power multiplexer switches seamlessly between a 3.7V Li-Ion battery and 5V USB input, with an onboard charger IC topping up the battery whenever USB is present. A 5V boost and 3.3V buck regulator serve every rail on the board. Gate-driver ICs level-shift the MCU's 3.3V GPIO to 12V to drive the FETs behind the high-visibility status LEDs.",
      },
      {
        heading: "Design goals",
        body: "Robust satellite connectivity, a compact handheld form factor, and battery life measured in days — achieved through aggressive power budgeting and duty-cycled radios. The full design was captured and laid out in Altium Designer.",
      },
    ],
    metrics: [
      { value: "100%", label: "global coverage via Iridium" },
      { value: "2", label: "seamless power sources" },
      { value: "AWS", label: "cloud-connected telemetry" },
    ],
    cover: {
      src: "iridium-iot/pcb-render",
      alt: "Summit Signal PCB layout render in Altium",
    },
    gallery: [
      {
        src: "iridium-iot/pcb-render",
        alt: "Summit Signal PCB layout render in Altium",
      },
      {
        src: "iridium-iot/fabricated-pcb",
        alt: "Fabricated and assembled Summit Signal PCB",
      },
      {
        src: "iridium-iot/schematic-page-1",
        alt: "Schematic page 1 — MCU and communications",
      },
      {
        src: "iridium-iot/schematic-page-2",
        alt: "Schematic page 2 — power architecture",
      },
      {
        src: "iridium-iot/schematic-page-3",
        alt: "Schematic page 3 — sensors and I/O",
      },
    ],
  },
  {
    slug: "smart-hand",
    title: "SmartHand — Motion-Tracking Glove",
    tagline:
      "Wearable BLE glove that tracks hand and finger motion in real time.",
    year: "2023",
    role: "Sole designer — hardware and firmware",
    context: "Personal project",
    tech: [
      "Altium Designer",
      "STM32WBA52",
      "C",
      "Bluetooth LE",
      "IMU Arrays",
      "Flex Sensors",
      "Haptics",
    ],
    overview:
      "SmartHand is a glove-integrated wearable that streams high-resolution hand and finger motion to a phone or computer over Bluetooth LE. Per-finger IMUs and flex sensors capture gesture data precise enough for visualization, HCI experiments, and gesture-control applications.",
    sections: [
      {
        heading: "Embedded architecture",
        body: "An STM32WBA52 microcontroller with an onboard bootloader runs custom C firmware. An I2C expander fans out to IMUs on the back of the hand and each finger, delivering high-resolution orientation data alongside analog flex-sensor channels. A haptic motor driver closes the loop with tactile feedback to the wearer.",
      },
      {
        heading: "Power & connectivity",
        body: "A priority power multiplexer selects between a 3.7V Li-Ion cell and 5V USB-C, with an integrated charger IC and a 3.3V buck-boost regulator powering the full sensor suite. A chip antenna handles BLE streaming to external nodes, while a USB-to-UART bridge provides a wired fallback for development and data capture.",
      },
      {
        heading: "Design goals",
        body: "Compact enough to disappear into a glove, and low-power enough for all-day wear. Every subsystem — sensing, radio, haptics, charging — fits a single tightly-routed board designed in Altium.",
      },
    ],
    metrics: [
      { value: "6+", label: "IMU sensing sites" },
      { value: "BLE", label: "real-time wireless streaming" },
      { value: "USB-C", label: "charge + data" },
    ],
    cover: {
      src: "smart-hand/pcb-render",
      alt: "SmartHand PCB layout render",
    },
    gallery: [
      { src: "smart-hand/pcb-render", alt: "SmartHand PCB layout render" },
      {
        src: "smart-hand/fabricated-pcb",
        alt: "Fabricated and assembled SmartHand PCB",
      },
      {
        src: "smart-hand/schematic-page-1",
        alt: "Schematic page 1 — MCU, radio, and sensors",
      },
      {
        src: "smart-hand/schematic-page-2",
        alt: "Schematic page 2 — power architecture",
      },
    ],
  },
  {
    slug: "telemetry-communication-board",
    title: "Telemetry Communication Board",
    tagline:
      "Live wireless telemetry and GPS tracking for a Formula SAE electric race car.",
    year: "2023",
    role: "Electrical Project Lead",
    context: "Northeastern Electric Racing",
    tech: [
      "PCB Design",
      "GNSS/GPS",
      "RF Telemetry",
      "Python",
      "PyQt6",
      "Google Maps API",
      "SD Logging",
    ],
    overview:
      "The Telemetry Communication Board streams live vehicle data from Northeastern's Formula SAE electric car to the pit wall, giving the team real-time position, speed, and system-health visibility during testing and competition.",
    sections: [
      {
        heading: "On-vehicle hardware",
        body: "The board pairs a programmable, ultra-robust meter-level GNSS positioning chip with a wireless telemetry link, streaming position, speed, heading, and time in real time. An integrated microcontroller mirrors every packet to an onboard SD card, so no data is lost if the RF link drops mid-lap.",
      },
      {
        heading: "Ground station software",
        body: "A custom Python ground station built with PyQt6 ingests the live stream, plots vehicle position and heading on an embedded Google Maps view, and flags faults for remote debugging — turning raw packets into decisions the team can make between laps.",
      },
    ],
    metrics: [
      { value: "Live", label: "vehicle telemetry" },
      { value: "1 m", label: "GNSS positioning class" },
      { value: "2×", label: "redundant data paths (RF + SD)" },
    ],
    cover: {
      src: "telemetry-communication-board/board",
      alt: "Telemetry Communication Board PCB",
    },
    gallery: [
      {
        src: "telemetry-communication-board/board",
        alt: "Telemetry Communication Board PCB",
      },
      {
        src: "telemetry-communication-board/map-view",
        alt: "PyQt6 ground station with live map view of the vehicle",
      },
    ],
  },
  {
    slug: "ev-dashboard",
    title: "EV Dashboard & Controls",
    tagline:
      "Driver interface and control systems for a formula-style electric vehicle.",
    year: "2022",
    role: "Electrical Project Lead",
    context: "Northeastern Electric Racing",
    tech: [
      "CAN Bus",
      "Arduino",
      "Embedded C",
      "Electromechanical Design",
      "Driver Interfaces",
    ],
    overview:
      "Directed the mechanical and electrical development of the race car's complete driver interface — dashboard, control systems, and brake-light control — the systems a driver depends on every second on track.",
    sections: [
      {
        heading: "What it involved",
        body: "The dashboard integrates vehicle state displays, driver controls, and safety indicators into a single cockpit unit. CAN bus modules on Arduino-class microcontrollers tie the dashboard into the rest of the vehicle's subsystems, providing robust communication between the driver interface, battery management, and motor controllers.",
      },
    ],
    metrics: [
      { value: "CAN", label: "vehicle-wide comms backbone" },
      { value: "3", label: "integrated control systems" },
    ],
    cover: {
      src: "ev-dashboard/dashboard",
      alt: "Formula SAE electric vehicle dashboard",
    },
    gallery: [
      {
        src: "ev-dashboard/dashboard",
        alt: "Formula SAE electric vehicle dashboard",
      },
    ],
  },
  {
    slug: "ev-charger",
    title: "300VDC AC/DC EV Charger",
    tagline:
      "High-voltage charging system for a championship-winning Formula Hybrid EV.",
    year: "2021",
    role: "Electrical Project Lead",
    context: "Northeastern Electric Racing",
    tech: [
      "Power Electronics",
      "300VDC",
      "CAN Bus",
      "BMS Integration",
      "High-Voltage Safety",
    ],
    overview:
      "Led electrical and mechanical development of the team's 300VDC charging system from concept through manufacturing — part of the package that took 1st Place Electric Vehicle at the IEEE Formula Hybrid+Electric 2021 competition.",
    sections: [
      {
        heading: "What it involved",
        body: "The design integrates a TSM 2500 CAN-enabled charger with the vehicle's Battery Management System, with charger schematics folded into the vehicle's master electrical architecture. The work spanned high-voltage safety design, enclosure and connector engineering, and rules compliance for competition scrutineering.",
      },
    ],
    metrics: [
      { value: "300VDC", label: "charge voltage" },
      { value: "1st", label: "place EV, Formula Hybrid 2021" },
    ],
    cover: {
      src: "ev-charger/exterior",
      alt: "300VDC EV charger enclosure exterior",
    },
    gallery: [
      {
        src: "ev-charger/exterior",
        alt: "300VDC EV charger enclosure exterior",
      },
      {
        src: "ev-charger/interior",
        alt: "EV charger interior wiring and power electronics",
      },
      {
        src: "ev-charger/connector",
        alt: "High-voltage charge connector",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
