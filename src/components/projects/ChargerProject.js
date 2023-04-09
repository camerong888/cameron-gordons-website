import React from "react";
import "./ChargerProject.css";
import InteriorPicture from '../../assets/chargerproject/interior.jpeg'; 
import ExteriorPicture from '../../assets/chargerproject/exterior.jpeg'; 
import ConnectorPicture from '../../assets/chargerproject/connector.jpeg'; 

function ChargerProject() {
  return (
    <div className="charger-project">
      <h1>300VDC AC/DC Charger Project</h1>
      <p>2021 Competition Year</p>
      <img
        src={InteriorPicture}
        alt="Charger Internals (2021 Comp Year)"
        className="charger-picture"
      />
      <p>Here's some information about the project:</p>
      <ul>
        <li>
          Directed the electrical and mechanical development of the electric
          vehicle's charging system for the Formula Hybrid SAE competition, from
          the idea phase through manufacturing.
        </li>
        <li>
          Created and integrated the charger's schematic into the master
          schematic of the formula-style electric vehicle.
        </li>
        <li>
          Integrated the TSM 2500 CAN-enabled charger into the design, ensuring
          proper communication with the onboard Battery Management System (BMS).
        </li>
      </ul>
    </div>
  );
}

export default ChargerProject;
