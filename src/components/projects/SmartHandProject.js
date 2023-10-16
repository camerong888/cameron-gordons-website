import React from "react";
import "./SmartHandProject.css";
import SmartHandPCB from "../../assets/smarthand/SmartHandPCB.jpg";
import SchematicPage1 from "../../assets/smarthand/SchematicPage1.jpg";
import SchematicPage2 from "../../assets/smarthand/SchematicPage2.jpg";
import fabricatedpcb from "../../assets/smarthand/fabricatedpcb.jpg";

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
        <h4>Device Usecase:</h4>
        <li>
          The SmartHand device is designed to be a integrated into a glove. The
          goal of this device is to connect to a phone or computer via Bluetooth
          and to track and visualize the user's hand and finger movements in
          real time, using multiple flex sensors and IMUs.
        </li>
        <h4>Embedded Architecture:</h4>
        <li>
          The device integrates a STM32WBA52CGU6 microcontroller with custom
          firmware flashed onto the device via the onboard bootloader written in
          C. Both I2C and UART is utilized to communicate to the embedded ICs
          and modules.
        </li>
        <li>
          Onboard IMUs and external IMUs connected through an I2C expander IC
          enable high resolution measurements from the back of the hand, and all
          fingers.
        </li>
        <h4>Power Architecture:</h4>
        <li>
          A flexible power architecture is utilized to run off of a portable
          3.7V lithium ion battery or 5V USB power. This is achieved through the
          use of a priority power multiplexer. A 3.3V buck-boost regulator IC is
          employed to satisfy all modules voltage requirements. Additionally, a
          battery charger IC is featured for seamless charging when USB power is
          connected.
        </li>
        <li>
          External RGY LEDs and buttons are utilized for the user to interact
          with and receive feedback about the device's current state. Gate drive
          ICs are utilized to boost the GPIO control voltage (3.3V) from the MCU
          to 12V to drive the FETs controlling the external LEDs.
        </li>
        <h4>External Connectivity:</h4>
        <li>
          A USB-C connector & Bluetooth chip antenna enables IMU data collected
          on the device to be sent to an external node for processing.
        </li>
        <img src={fabricatedpcb} alt="Hq" className="hq-picture" />
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
          Custom-designed, wearable Smart Glove device schematic. It features
          the STM32WBA52CGU6 microcontroller, a USB-to-UART Bridge, a Li-Ion
          charger, a power mux, a buck-boost converter, and an I2C expander for
          external IMU communication. The device is also equipped with a haptic
          motor driver, Bluetooth connectivity, and multiple sensors (including
          flex sensors and an onboard IMU) to monitor the user's hand movements
          and gestures accurately.
        </li>
        <li>Design goals: compact and low power consumption</li>
        <li>Designed in Altium</li>
      </ul>
    </div>
  );
}

export default SmartHand;
