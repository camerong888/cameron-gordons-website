import React from "react";
import "./IridiumIoTEmbeddedDevice.css";
import IridiumPCB from "../../assets/iridiumiot/Capstone PCB updated.png";
import SchematicPage1 from "../../assets/iridiumiot/page 1.png";
import SchematicPage2 from "../../assets/iridiumiot/page 2.png";
import SchematicPage3 from "../../assets/iridiumiot/page 3.png";
// import fabricatedpcb from "../../assets/iridiumiot/fabricatedpcb.jpg";

function IridiumIoTEmbeddedDevice() {
  return (
    <div className="iridiumiotembeddeddevice">
      <h1>Iridium IoT Embedded Device</h1>
      <p>2023 Advanced Embedded Device Project</p>
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
        <li>Connectivity: USB-C & Iridium satellite communication</li>
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
          Custom-designed PCB schematic leveraging the power of the SAM-M8Q
          module for GNSS capabilities. The device integrates an STM32WBA52CGU6
          microcontroller, a USB-to-UART Bridge, a Li-Ion charger, a power mux,
          and a buck-boost converter. It also incorporates essential features
          for advanced IoT use cases, like an I2C expander for additional sensor
          integration, allowing for extended capabilities in various IoT
          applications.
        </li>
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
