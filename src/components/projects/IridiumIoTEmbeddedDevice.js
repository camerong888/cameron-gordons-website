import React from "react";
import "./IridiumIoTEmbeddedDevice.css";
import IridiumPCB from "../../assets/iridiumiot/Capstone PCB.png";
import SchematicPage1 from "../../assets/iridiumiot/page 1.png";
import SchematicPage2 from "../../assets/iridiumiot/page 2.png";
import SchematicPage3 from "../../assets/iridiumiot/page 3.png";
import EmbeddedArchDiagram from "../../assets/iridiumiot/page 1.png";

function IridiumIoTEmbeddedDevice() {
  return (
    <div className="iridiumiotembeddeddevice">
      <h1>Iridium IoT Embedded Device</h1>
      <p>2023 Personal Embedded Device Project</p>
      <img
        src={IridiumPCB}
        alt="Iridium IoT Embedded Device (Advanced Embedded Device Project)"
        className="iridiumiotembeddeddevice-picture"
      />
      <p>Here's some details about the Iridium IoT project:</p>
      <ul style={{ listStyleType: "none" }}>
        <li>
          The Iridium IoT Embedded Device is purpose-built for seamless
          communication using the Iridium satellite network, making it ideal for
          remote IoT applications where traditional connectivity is unavailable.
        </li>
        <li>
          The device utilises a Teensy 4.1 microcontroller with custom
          firmware written in C++. Both I2C and UART is utilized to communicate
          to the embedded ICs and modules.
        </li>
        <li>
          The embedded device features the SAM-M10Q GNSS integrated patch
          antenna module for live location data, the RockBLOCK 9603 Iridium
          transceiver for 100% earth coverage of short burst data (SBD) internet
          connectivity, and a flexible power architecture to run off of a
          portable 3.7V lithium ion battery or USB power. An integrated battery
          charger IC is also featured with a coupled power MUX for seamless
          charging.{" "}
        </li>
        <img
          src={SchematicPage1}
          alt="Schematic Page 1"
          className="schematic-picture"
        />
        <img
          src={SchematicPage2}
          alt="Schematic Page 2"
          className="schematic-picture"
        />
        <img
          src={SchematicPage3}
          alt="Schematic Page 3"
          className="schematic-picture"
        />
        <li>
          Design goals: robust satellite connectivity, compact form factor, and
          optimized power consumption.
        </li>
        <li>
          Designed with precision in Altium, highlighting expertise in creating
          sophisticated, reliable, and scalable IoT solutions.
        </li>
        {/* <img src={fabricatedpcb} alt="Fabricated PCB" className="hq-picture" /> */}
      </ul>
    </div>
  );
}

export default IridiumIoTEmbeddedDevice;
