import React from "react";
import "./LibertyDefense.css";
import LibertyDefenseLogo from "../../assets/libertydefense/Liberty-Defense-Logo-Lg.png";
import hexwave from "../../assets/libertydefense/HEXWAVE.png";

function LibertyDefense() {
  const LibertyDefenseUrl = "https://www.libertydefense.com/";
  return (
    <div className="tesla">
      <h1> Altium Designer Consultant at Liberty Defense </h1>
      <p>May 2023 - June 2023</p>
      <p>Wilmington, MA</p>
      <img src={LibertyDefenseLogo} alt="Hq" className="hq-picture" loading="lazy"/>
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          During my tenure as an Altium Designer Consultant at Liberty Defense,
          I specialized in creating and managing PCB components. My work
          resulted in a well-organized library management system, significantly
          streamlining the design process across diverse teams and projects.
        </li>
        <img src={hexwave} alt="Hq" className="hq-picture" loading="lazy"/>
        <li>
          A key accomplishment was my contribution to the HEXWAVE System, a
          next-gen body scanner. My Altium components underpin this system,
          which uses AI and 3D imaging to swiftly and accurately detect
          concealed items. This high-throughput portal epitomizes my
          professional expertise and commitment to innovative solutions.
        </li>
        <li>
          See more about Liberty Defense:{" "}
          <a href={LibertyDefenseUrl} target="_blank" rel="noopener noreferrer">
            {LibertyDefenseUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LibertyDefense;
