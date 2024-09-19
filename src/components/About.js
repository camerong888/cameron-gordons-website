import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <section id="about" className="about">
        <h2 className="about-title">About</h2>
        <p>
          I am a recent Master's graduate in Electrical and Computer Engineering
          from Northeastern University with a passion for pushing the boundaries
          of technology to develop innovative hardware and software solutions.
          With 21 months of hands-on internship experience at industry-leading
          companies like Tesla, Redwire Space, Fresenius Medical Care, and
          Liberty Defense, I have built a strong foundation in embedded systems,
          hardware & software design, PCB design, and hardware validation.
        </p>
        <p>
          During my time at Redwire Space, I led the hardware and software
          design for a new sun sensor product, achieving a 70% cost reduction
          while maintaining high performance. I developed mathematical models
          and optimization algorithms for automatic device calibration,
          enhancing sensor accuracy by 250% and reducing manufacturing time by
          15%. Collaborating with cross-functional teams, I delivered a
          prototype under accelerated timelines and budget constraints,
          projecting a 450% ROI in the first year.
        </p>
        <p>
          At Tesla, I redesigned integrated circuits for display interface PCBAs
          used in mass-production vehicles, reducing manufacturing costs by over
          15% and improving thermal management and signal integrity. I
          identified and resolved critical hardware design flaws, collaborated
          with international vendors, and streamlined production validation
          workflows to increase efficiency.
        </p>
        <p>
          My academic and extracurricular experiences have further honed my
          skills. As the Project Lead for Northeastern Electric Racing, I
          directed a team of eight students through three major hardware and
          software projects, contributing to the development of a Formula SAE
          electric vehicle. Our team secured 1st Place Electric Vehicle at the
          IEEE-sponsored Formula Hybrid+Electric 2021 Competition.
        </p>
        <p>
          I have also recently finished working on a personal project, the
          SUMMIT SIGNAL—an IoT satellite-based SOS device with AWS web
          connectivity. This handheld device integrates advanced hardware
          features like GNSS and Iridium patch antennas, IMU, MCU, gate driver,
          Li-Ion charger, and power multiplexer to enable global emergency
          communication.
        </p>
        <p>
          As I embark on the next chapter of my career, I am eager to join a
          forward-thinking company where I can contribute to the development of
          cutting-edge hardware and software systems. I am driven by the
          opportunity to work on innovative projects that have a meaningful
          impact on people's lives, and I am committed to continuous learning
          and embracing new challenges in the field of hardware engineering.
        </p>
      </section>
    </div>
  );
}

export default About;
