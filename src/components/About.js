import React from "react";
import "./About.css";
import profilePicture from "../assets/camerongordon.jpg";

function About() {
  return (
    <div className="about-container">
      <section id="about" className="about">
        <div className="about-header">
          <img src={profilePicture} alt="Cameron Gordon" className="profile-pic"/>
          <h1 className="about-title">About Cameron Gordon</h1>
        </div>
        <p className="elevator-pitch">
          Passionate Electrical and Computer Engineer with a Master's from Northeastern University. Specializing in innovative hardware and software solutions, with proven expertise in embedded systems, PCB design, and hardware validation. Currently driving cutting-edge projects at Raytheon, following impactful internships at Tesla, Redwire Space, and more.
        </p>

        <h2>Professional Experience</h2>
        <p>
          At Redwire Space, I led the hardware and software design for a new sun sensor product, achieving a 70% cost reduction while maintaining top performance. I developed mathematical models and optimization algorithms that boosted sensor accuracy by 250% and cut manufacturing time by 15%. Working with cross-functional teams, I delivered a prototype ahead of schedule, projecting a 450% ROI in the first year.
        </p>
        <p>
          During my internship at Tesla, I redesigned integrated circuits for display interface PCBAs in mass-production vehicles, reducing costs by over 15% and enhancing thermal management and signal integrity. I resolved critical design flaws, collaborated with global vendors, and optimized production validation for greater efficiency.
        </p>
        <p>
          Additional hands-on experience includes roles at Fresenius Medical Care and Liberty Defense, where I honed skills in hardware validation and embedded systems across 21 months of industry exposure.
        </p>

        <h2>Academic & Extracurricular Achievements</h2>
        <p>
          As Project Lead for Northeastern Electric Racing, I guided a team of eight through three major hardware and software projects for a Formula SAE electric vehicle. Our efforts culminated in 1st Place Electric Vehicle at the IEEE-sponsored Formula Hybrid+Electric 2021 Competition.
        </p>

        <h2>Personal Projects</h2>
        <p>
          Recently completed the SUMMIT SIGNAL—an IoT satellite-based SOS device with AWS connectivity. This handheld innovation features GNSS and Iridium antennas, IMU, MCU, gate driver, Li-Ion charger, and power multiplexer for reliable global emergency communication.
        </p>

        <h2>Looking Forward</h2>
        <p>
          Eager to tackle new challenges in hardware engineering, I seek opportunities to innovate and impact lives through technology. Committed to lifelong learning in a dynamic field.
        </p>

        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Embedded Systems</li>
          <li>Hardware Design</li>
          <li>Software Development</li>
          <li>PCB Design</li>
          <li>Hardware Validation</li>
          <li>CAD</li>
          <li>Solidworks</li>
        </ul>

        <h2>Connect & Download</h2>
        <p>
          Let's connect: <a href="https://www.linkedin.com/in/gordonca" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/camerong888" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <p>
          Download my resume: <a href="/resume.pdf" download="Cameron_Gordon_Resume.pdf">PDF</a>
        </p>
      </section>
    </div>
  );
}

export default About;