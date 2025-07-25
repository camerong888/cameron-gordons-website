import React from "react";
import "./IridiumIoTEmbeddedDevice.css";
import IridiumPCB from "../../assets/iridiumiot/Capstone PCB.png";
import SchematicPage1 from "../../assets/iridiumiot/page 1.png";
import SchematicPage2 from "../../assets/iridiumiot/page 2.png";
import SchematicPage3 from "../../assets/iridiumiot/page 3.png";
import FabricatedPCB from "../../assets/iridiumiot/fabricatedpcb.png";

function IridiumIoTEmbeddedDevice() {
  return (
    <div className="iridiumiotembeddeddevice">
      <h1>Iridium IoT Embedded Device</h1>
      <p>2023 Personal Embedded Device Project</p>
      <img
        src={IridiumPCB}
        alt="Iridium IoT Embedded Device (Advanced Embedded Device Project)"
        className="iridiumiotembeddeddevice-picture"
        loading="lazy"
      />
      <p>Here's some details about the Iridium IoT project:</p>
      <ul style={{ listStyleType: "none" }}>
        <h4>Device Usecase:</h4>
        <li>
          The Iridium IoT Embedded Device is purpose-built for seamless
          communication using the Iridium satellite network, making it ideal for
          remote IoT applications where traditional connectivity (cellular
          network connectivity) is unavailable.
        </li>
        <li>
          This device is perfect for explorers to contact emergency services in
          remote locations to relay their live location.
        </li>
        <p> </p>
        <h4>Embedded Architecture:</h4>
        <li>
          The device utilizes a Teensy 4.1 microcontroller with custom firmware
          written in C++. Both I2C and UART communication protocols are utilized
          to communicate to the embedded ICs and modules.
        </li>
        <li>
          The embedded device features the SAM-M10Q GNSS integrated patch
          antenna module for live location data, the RockBLOCK 9603 Iridium
          transceiver for 100% earth coverage of short burst data (SBD) internet
          connectivity, and an inertial measurement unit (IMU) for additional
          data collection. It additionally features a micro SD card in which the
          collected data (location, heading, speed etc.) that is frequently
          queried is stored for external processing.
        </li>
        <h4>Power Architecture:</h4>
        <li>
          A flexible power architecture is utilized to run off of a portable
          3.7V lithium ion battery or 5V USB power. This is achieved through the
          use of a priority power multiplexer. A 5V boost and 3.3V buck
          regulator IC is employed to satisfy all modules voltage requirements.
          Additionally, a battery charger IC is featured for seamless charging
          when USB power is connected.
        </li>
        <li>
          External RGY LEDs and buttons are utilized for the user to interact
          with and receive feedback about the device's current state. Gate drive
          ICs are utilized to boost the GPIO control voltage (3.3V) from the MCU
          to 12V to drive the FETs controlling the external LEDs.
        </li>
        <img src={FabricatedPCB} alt="Hq" className="hq-picture" />
        <img
          src={SchematicPage1}
          alt="Schematic Page 1"
          className="schematic-picture"
          loading="lazy"
        />
        <img
          src={SchematicPage2}
          alt="Schematic Page 2"
          className="schematic-picture"
          loading="lazy"
        />
        <img
          src={SchematicPage3}
          alt="Schematic Page 3"
          className="schematic-picture"
          loading="lazy"
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
