import React from "react";
import "./Fresenius.css";
import Logo from "../../assets/fresenius/NxStage.png";

function Fresenius(props) {
  return (
    <div className="fresenius">
      <h1>R&D Electrical Engineering Internship at Fresenius Medical Care</h1>
      <p>Jan 2021 - Aug 2021</p>
      <p>Lawrence, MA</p>
      <img src={Logo} alt="Nxstage/Fresenius Logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          Designed custom embedded circuit board platforms for next gen dialysis
          machine
        </li>
        <li>
          Diagnosed sources of noise and utilized CAD tools to model
          implementable solutions on existing products
        </li>
      </ul>
    </div>
  );
}

export default Fresenius;
