import React from "react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'; // Add this import for animations

// ... existing code (imports and function start) ...

function WorkExperience() {
  return (
    <div className="workexperience-container" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem' }}>
      <section id="work-experience" className="workexperience">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="workexperience-title"
          style={{ color: 'var(--primary-color)' }}
        >
          Work Experience
        </motion.h2>
        <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/raytheon" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                Hardware Engineer at Raytheon
              </Link>
            </h3>
            <p>January 2025 - Present</p>
            <p>Woburn, MA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/redwire" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                Hardware Engineering Internship at Redwire
              </Link>
            </h3>
            <p>May 2024 - Aug 2024</p>
            <p>Marlborough, MA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/libertydefense" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                Altium Designer Consultant at Liberty Defense
              </Link>
            </h3>
            <p>May 2023 - June 2023</p>
            <p>Wilmington, MA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/tesla" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                Display Electrical Engineering Internship at Tesla
              </Link>
            </h3>
            <p>Jan 2022 - Aug 2022</p>
            <p>Palo Alto, CA</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1rem', transition: 'transform 0.3s' }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>
              <Link to="/fresenius" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>
                R&D Electrical Engineering Internship at Fresenius Medical Care
              </Link>
            </h3>
            <p>Jan 2021 - Aug 2021</p>
            <p>Lawrence, MA</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WorkExperience;