import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-container">
      <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/smarthand">SmartHand Embedded Device</Link>
            </h3>
            <p>2023 Personal Embedded Device Project</p>
          </li>
          <li>
            <h3>
              <Link to="/tcb">Telemetry Communication Board</Link>
            </h3>
            <p>2023 NER Competition Year</p>
          </li>
          <li>
            <h3>
              <Link to="/dashboard"> EV Dashboard/Control</Link>
            </h3>
            <p>2022 NER Competition Year</p>
          </li>
          <li>
            <h3>
              <Link to="/charger"> EV Charger</Link>
            </h3>
            <p>2021 NER Competition Year</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
