import React from "react";
import "./NER.css";
import Car from "../../assets/ner/car.jpeg";

function NER(props) {
  return (
    <div className="ner-work">
      <h1>Electrical Project Lead at Northeastern Electric Racing</h1>
      <p>Aug 2020 - Present</p>
      <p>Boston, MA</p>
      <img src={Car} alt="EV" className="car-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          Led a team of 8+ undergraduate electrical engineers through complete
          design cycles of projects that contributed to the development of a
          formula-style electric vehicle.
        </li>
        <li>
          Worked on a tight timeline to meet deadlines in accordance with
          budget, rules compliance, and technical specifications, while
          documenting and communicating design progress, and collaborating with
          other research and design teams.
        </li>
      </ul>
    </div>
  );
}

export default NER;
