import React from 'react';
import './TelemetryCommunicationBoard.css'; // import the stylesheet for this component

function TelemetryCommunicationBoard() {
  return (
    <div className="telemetry-board">
      <h1>Telemetry Communication Board Project</h1>
      <p>Here's some information about the project:</p>
      <ul>
        <li>It was built using React</li>
        <li>It communicates with an external API to display real-time telemetry data</li>
        <li>It has a user-friendly interface that allows users to easily interact with the data</li>
      </ul>
    </div>
  );
}

export default TelemetryCommunicationBoard;
