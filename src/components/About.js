import React from "react";
import "./About.css";
import profilePicture from "../assets/camerongordon.jpg";
import { motion } from 'framer-motion'; // Added for subtle animations

function About() {
  return (
    <div className="about-container" style={{ backgroundColor: 'var(--bg-color)', padding: '2rem' }}>
      <section id="about" className="about">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profilePicture} alt="Cameron Gordon" className="profile-pic" style={{ borderRadius: '50%', boxShadow: '0 4px 12px var(--shadow)', maxWidth: '200px' }} />
          <h1 className="about-title" style={{ color: 'var(--primary-color)' }}>About Cameron Gordon</h1>
        </motion.div>
        <div style={{ width: '100%', maxWidth: '600px', margin: '1rem auto', borderBottom: '2px solid var(--secondary-color)', opacity: 0.3 }}></div>
        <motion.p
          className="elevator-pitch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ margin: '1rem auto', maxWidth: '800px', textAlign: 'center' }}
        >
          Passionate Electrical and Computer Engineer with a Master's from Northeastern University. Specializing in innovative hardware and software solutions, with proven expertise in embedded systems, PCB design, and hardware validation. Currently driving cutting-edge projects at Raytheon, following impactful internships at Tesla, Redwire Space, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
        >
          <h2 className="subsection-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Professional Experience</h2>
          <p style={{ marginBottom: '1rem' }}>
            At Redwire Space, I led the hardware and software design for a new sun sensor product, achieving a 70% cost reduction while maintaining top performance. I developed mathematical models and optimization algorithms that boosted sensor accuracy by 250% and cut manufacturing time by 15%. Working with cross-functional teams, I delivered a prototype ahead of schedule, projecting a 450% ROI in the first year.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            During my internship at Tesla, I redesigned integrated circuits for display interface PCBAs in mass-production vehicles, reducing costs by over 15% and enhancing thermal management and signal integrity. I resolved critical design flaws, collaborated with global vendors, and optimized production validation for greater efficiency.
          </p>
          <p>
            Additional hands-on experience includes roles at Fresenius Medical Care and Liberty Defense, where I honed skills in hardware validation and embedded systems across 21 months of industry exposure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
        >
          <h2 className="subsection-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Academic & Extracurricular Achievements</h2>
          <p>
            As Project Lead for Northeastern Electric Racing, I guided a team of eight through three major hardware and software projects for a Formula SAE electric vehicle. Our efforts culminated in 1st Place Electric Vehicle at the IEEE-sponsored Formula Hybrid+Electric 2021 Competition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
        >
          <h2 className="subsection-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Personal Projects</h2>
          <p>
            Recently completed the SUMMIT SIGNAL—an IoT satellite-based SOS device with AWS connectivity. This handheld innovation features GNSS and Iridium antennas, IMU, MCU, gate driver, Li-Ion charger, and power multiplexer for reliable global emergency communication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
        >
          <h2 className="subsection-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Looking Forward</h2>
          <p>
            Eager to tackle new challenges in hardware engineering, I seek opportunities to innovate and impact lives through technology. Committed to lifelong learning in a dynamic field.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
        >
          <h2 className="subsection-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Skills</h2>
          <ul
            className="skills-list"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', listStyle: 'none', padding: 0, justifyContent: 'center' }}
          >
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>Embedded Systems</li>
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>Hardware Design</li>
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>Software Development</li>
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>PCB Design</li>
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>Hardware Validation</li>
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>CAD</li>
            <li style={{ background: 'var(--card-bg)', padding: '0.5rem 1rem', borderRadius: '20px', boxShadow: '0 2px 6px var(--shadow)' }}>Solidworks</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
          style={{ backgroundColor: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 4px 12px var(--shadow)', padding: '1.5rem', margin: '1rem 0' }}
        >
          <h2 className="subsection-title" style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Resume</h2>
          <p>
            Download my resume: <a href="/resume.pdf" download="Cameron_Gordon_Resume.pdf" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>PDF</a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;