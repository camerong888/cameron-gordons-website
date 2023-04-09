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
              <Link to="/tcb">Telemetry Communication Board</Link>
            </h3>
            <p>2023 Competition Year</p>
          </li>
          <li>
            <h3>
              <Link to="/dashboard"> EV Dashboard/Control</Link>
            </h3>
            <p>2022 Competition Year</p>
          </li>
          <li>
            <h3>
              <Link to="/charger"> EV Charger</Link>
            </h3>
            <p>2021 Competition Year</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Projects;
