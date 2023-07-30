import React from "react";
import "./Tesla.css";
import Hq from "../../assets/tesla/hq.jpeg";
import display from "../../assets/tesla/display.avif";

function Tesla(props) {
  const TeslaUrl = "https://" + "www.tesla.com/";
  return (
    <div className="tesla">
      <h1> Display Electrical Engineering Internship at Tesla </h1>
      <p>Jan 2022 - Aug 2022</p>
      <p>Palo Alto, CA</p>
      <img src={Hq} alt="Hq" className="hq-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          As a Display Electrical Engineering Intern at Tesla, I was immersed in
          the full life cycle of display PCB design. My role involved designing,
          validating, and scripting firmware for numerous new display PCBs. By
          conducting hundreds of Design of Experiments (DOEs), and collaborating
          closely with vendors, I successfully contributed to the delivery of
          innovative display PCBs that are now integral parts of mass-produced
          vehicles.
        </li>
        <img src={display} alt="Hq" className="hq-picture" />
        <li>
          Collaboration was a core element of my work, as I regularly interfaced
          with cross-functional teams. This was essential in ensuring that all
          PCB designs I worked on were fully compatible with Tesla's overarching
          vehicle architecture. My experience at Tesla signified an in-depth
          understanding of electrical engineering in the context of the
          automotive industry, bolstered by a culture of teamwork and
          innovation.
        </li>
        <li>
          See more about Tesla:{" "}
          <a href={TeslaUrl} target="_blank" rel="noopener noreferrer">
            {TeslaUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tesla;
