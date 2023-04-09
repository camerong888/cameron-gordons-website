import React from "react";
import "./Tesla.css";
import Hq from "../../assets/tesla/hq.jpeg";

function Tesla(props) {
  return (
    <div className="tesla">
      <h1> Display Electrical Engineering Internship at Tesla </h1>
      <p>Jan 2022 - Aug 2022</p>
      <p>Palo Alto, CA</p>
      <img src={Hq} alt="Hq" className="hq-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          Designed, validated, wrote firmware, and ran hundreds of DOEs, and
          worked with vendors to deliver multiple new display PCBs that are now
          featured on mass-production vehicles
        </li>
        <li>
          Worked with cross functional teams to ensure PCB designs were
          compatible with entire vehicle architecture
        </li>
      </ul>
    </div>
  );
}

export default Tesla;
