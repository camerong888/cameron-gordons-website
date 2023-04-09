import React from "react";
import "./TelemetryCommunicationBoard.css";
import PCBpicture from "../../assets/telemetrycommunicationboard.jpeg";

function TelemetryCommunicationBoard() {
  return (
    <div className="telemetry-board">
      <h1>Telemetry Communication Board Project</h1>
      <img
        src={PCBpicture}
        alt="Telemetry Communication Board (2023 Comp Year)"
        className="tcb-picture"
      />
      <p>
        Enables live telemetry data from Formula SAE electric vehicle to be
        wirelessly transmitted to remote computer/node for real-time analysis.
        Additionally features programmable ultra-robust meter-level GNSS/GPS
        positioning chip for live position, speed, direction, and time data.
        Onboard backup SD card logging enabled through integrated
        microcontroller.
      </p>
    </div>
  );
}

export default TelemetryCommunicationBoard;
