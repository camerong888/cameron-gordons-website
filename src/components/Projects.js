import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-container" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem' }}>
      <section id="projects" className="projects">
        <h2 className="projects-title" style={{ color: 'var(--primary-color)' }}>Projects</h2>
        <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/iridiumiotembeddeddevice" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>Iridium IoT Embedded Device</Link>
            </h3>
            <p>2023 Personal Embedded Device Project</p>
          </div>
          <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/smarthand" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>SmartHand Embedded Device</Link>
            </h3>
            <p>2023 Personal Embedded Device Project</p>
          </div>
          <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/tcb" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>Telemetry Communication Board</Link>
            </h3>
            <p>2023 NER Competition Year</p>
          </div>
          <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/dashboard" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>EV Dashboard/Control</Link>
            </h3>
            <p>2022 NER Competition Year</p>
          </div>
          <div style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/charger" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>EV Charger</Link>
            </h3>
            <p>2021 NER Competition Year</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;