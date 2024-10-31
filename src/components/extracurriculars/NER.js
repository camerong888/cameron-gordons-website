import React from "react";
import "./NER.css";
import Car from "../../assets/ner/car.jpeg";
import NERlogo from "../../assets/ner/nuelecracing.jpeg";

function NER(props) {
  const NERUrl = "https://electricracing.northeastern.edu/";
  return (
    <div className="ner-work">
      <h1>Electrical Project Lead at Northeastern Electric Racing</h1>
      <p>Sep 2019 - Aug 2023</p>
      <p>Boston, MA</p>
      <img src={NERlogo} alt="EV" className="car-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          As the Electrical Project Lead at Northeastern Electric Racing, I
          steered a dynamic team of more than eight undergraduate electrical
          engineers. Together, we navigated complete design cycles for projects
          essential to the development of a cutting-edge, formula-style electric
          vehicle, illustrating my aptitude for leadership and complex project
          management.
        </li>
        <img src={Car} alt="EV" className="car-picture" />
        <li>
          My ability to thrive under pressure was tested and proven as I
          efficiently managed tight timelines, met budget constraints, and
          ensured rules compliance and technical specifications adherence.
          Furthermore, I maintained transparency in our process by diligently
          documenting and communicating design progress, fostering successful
          collaboration with various research and design teams. This role
          showcased my adeptness in juggling multiple responsibilities while
          driving high-stakes engineering projects to fruition.
        </li>
        <li>
          See more about Northeastern Electric Racing:{" "}
          <a href={NERUrl} target="_blank" rel="noopener noreferrer">
            {NERUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NER;
