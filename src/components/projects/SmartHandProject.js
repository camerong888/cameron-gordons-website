import React from "react";
import "./SmartHandProject.css";
import SmartHandPCB from "../../assets/smarthand/SmartHandPCB.jpg";
import SchematicPage1 from "../../assets/smarthand/SchematicPage1.jpg";
import SchematicPage2 from "../../assets/smarthand/SchematicPage2.jpg";

function SmartHand() {
  return (
    <div className="smarthand">
      <h1>SmartHand Main Board</h1>
      <p>2023 Personal Embedded Device Project</p>
      <img
        src={SmartHandPCB}
        alt="SmartHand (Personal Embedded Device Project)"
        className="smarthand-picture"
      />
      <p>Here's some information about the project:</p>
      <ul style={{ listStyleType: "none" }}>
        <li>
          The SmartHand device is designed to be a integrated into a glove. The
          goal of this device is to connect to a phone or computer via Bluetooth
          and to track and visualize the user's hand and finger movements in
          real time, using multiple flex sensors and IMUs. 
        </li>
        <li>Connectivity: USB-C & Bluetooth</li>
        <img
          src={SchematicPage1}
          alt="Schematic Page 1"
          className="schematic1-picture"
        />
        <img
          src={SchematicPage2}
          alt="Schematic Page 2"
          className="schematic2-picture"
        />
        <li>
          Custom-designed, wearable Smart Glove device scheamtic. It features the
          STM32WBA52CGU6 microcontroller, a USB-to-UART Bridge, a Li-Ion
          charger, a power mux, a buck-boost converter, and an I2C expander for
          external IMU communication. The device is also equipped with a haptic
          motor driver, Bluetooth connectivity, and multiple sensors (including
          flex sensors and an onboard IMU) to monitor the user's hand movements
          and gestures accurately.
        </li>
        <li>
          Design goals: compact and low power consumption
        </li>
        <li>
          Designed in Altium
        </li>
      </ul>
    </div>
  );
}

export default SmartHand;
