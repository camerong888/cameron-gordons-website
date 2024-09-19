import React from "react";
import "./Redwire.css";
import Logo from "../../assets/redwire/redwire-logo.jpg";
import sunsensor from "../../assets/redwire/sunsensor.png";

function Redwire(props) {
  const RedwireUrl = "https://" + "www.redwirespace.com/";
  return (
    <div className="redwire">
      <h1> Hardware Engineering Internship at Redwire Space </h1>
      <p>May 2024 - Aug 2024</p>
      <p>Marlborough, MA</p>
      <img src={Logo} alt="Logo" className="picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          As a Hardware Engineering Intern at Redwire Space, I was deeply
          involved in the development of new sun sensor technology for
          spacecraft. My primary project focused on designing an analog and
          digital Quad Sun Sensor (QSS), aiming to deliver a lower-cost and
          faster time-to-market solution compared to existing products. I led
          the project through its full lifecycle, encompassing electrical
          design, embedded software development, and hardware validation. By
          working on both the analog and digital versions, I achieved first-spin
          success of the hardware and developed mathematical models and
          optimization algorithms to accurately convert photodiode outputs into
          precise angle measurements.
        </li>
        <img src={sunsensor} alt="Sun Sensor" className="picture" />
        <li>
          Collaboration was integral to my role, as I worked closely with
          cross-functional teams including test engineering, mechanical design,
          and software development. This teamwork was essential for the
          successful integration and validation of the sun sensor. My experience
          at Redwire Space provided me with a deep understanding of the rigorous
          design processes required for space applications, including managing
          radiation effects and other unique challenges. I also honed my skills
          in writing comprehensive engineering analyses and reports—such as part
          stress analyses, reliability analyses, and thermal
          analyses—highlighting the importance of thorough documentation in
          engineering projects.
        </li>
        <li>
          See more about Redwire:{" "}
          <a href={RedwireUrl} target="_blank" rel="noopener noreferrer">
            {RedwireUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Redwire;
