import React from "react";
import "./NER.css";
import Car from "../../assets/ner/car.jpeg";

function NER(props) {
  return (
    <div className="ner-work">
      <h1>Electrical Project Lead at Northeastern Electric Racing</h1>
      <p>Jan 2022 - Aug 2022</p>
      <p>Palo Alto, CA</p>
      <img src={Car} alt="EV" className="car-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          Leading a team of 8+ undergraduate EEs through complete design cycles
          of projects that contribute to the development of a formula-style
          electric vehicle
        </li>
        <li>
          Work on a tight timeline to meet deadlines in accordance with budget,
          rules compliance, and technical specifications to document,
          communicate design progress, and work with other research and design
          teams
        </li>
      </ul>
    </div>
  );
}

export default NER;
