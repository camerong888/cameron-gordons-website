import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <section id="projects" className="projects">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <h3>Telemetry Communication Board (2023 Comp Year)</h3>
            <p>Enables live telemetry data from Formula SAE electric vehicle to be wirelessly transmitted to remote computer/node for real-time analysis. Additionally features programmable ultra-robust meter-level GNSS/GPS positioning chip for live position, speed, direction, and time data. Onboard backup SD card logging enabled through integrated microcontroller.</p>
          </li>
          <li>
            <h3>Dashboard (2022 Comp Year)</h3>
          </li>
          <li>
            <h3>Charger Internals (2021 Comp Year)</h3>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;