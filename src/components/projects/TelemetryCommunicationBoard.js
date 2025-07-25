import React from "react";
import "./TelemetryCommunicationBoard.css";
import PCBpicture from "../../assets/telemetrycommunicationboard/telemetrycommunicationboard.jpeg";
import Pythonapplication_map from "../../assets/telemetrycommunicationboard/map view.jpeg";

function TelemetryCommunicationBoard() {
  return (
    <div className="telemetry-board">
      <h1>Telemetry Communication Board Project</h1>
      <p>2023 Competition Year</p>
      <img
        src={PCBpicture}
        alt="Telemetry Communication Board (2023 Comp Year)"
        className="tcb-picture"
        loading="lazy"
      />
      <p>Here's some information about the project:</p>
      <ul style={{ listStyleType: "none" }}>
        <li>
          Enabled live telemetry data from the Formula SAE electric vehicle to
          be wirelessly transmitted to a remote computer/node for real-time
          analysis.
        </li>
        <li>
          Featured a programmable ultra-robust meter-level GNSS/GPS positioning
          chip for live position, speed, direction, and time data. Onboard
          backup SD card logging was enabled through an integrated
          microcontroller.
        </li>
        <img
          src={Pythonapplication_map}
          alt="Python Application - Map"
          className="map-picture"
          loading="lazy"
        />
        <li>
          Developed custom Python application using PyQt6 to process live
          telemetry data recieved from the Telemetry Communication Board.
          Features embedded Google Maps API to plot live location and heading
          direction of vehicle and fault detection for remote debugging
          capabilities.
        </li>
      </ul>
    </div>
  );
}

export default TelemetryCommunicationBoard;
