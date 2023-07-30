import React from "react";
import "./Fresenius.css";
import Logo from "../../assets/fresenius/NxStage.png";
import nxone from "../../assets/fresenius/nxone.png";

function Fresenius(props) {
  const nxstageUrl = "https://" + "www.nxstage.com/";
  return (
    <div className="fresenius">
      <h1>R&D Electrical Engineering Internship at Fresenius Medical Care</h1>
      <p>Jan 2021 - Aug 2021</p>
      <p>Lawrence, MA</p>
      <img src={Logo} alt="Nxstage/Fresenius Logo" className="logo-picture" />
      <p>Here's some information about the experience:</p>
      <ul>
        <li>
          As an R&D Electrical Engineering Intern at Fresenius Medical Care, I
          honed my skills in bespoke embedded circuit board design. A standout
          project was designing custom platforms for the next generation of
          dialysis machines, reflecting my commitment to healthcare innovation
          and technical excellence.
        </li>
        <img src={nxone} alt="Nxstage/Fresenius Logo" className="logo-picture" />
        <li>
          Troubleshooting formed a significant part of my role, where I mastered
          the art of diagnosing noise sources within the circuitry. Armed with
          advanced CAD tools, I successfully modeled and implemented effective
          solutions, thereby enhancing the reliability and performance of
          existing products.
        </li>
        <li>
          See more about NxStage:{" "}
          <a href={nxstageUrl} target="_blank" rel="noopener noreferrer">
            {nxstageUrl}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Fresenius;
