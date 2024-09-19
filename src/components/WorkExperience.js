import React from "react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";

function WorkExperience() {
  return (
    <div className="workexperience-container">
      <section id="work-experience" className="workexperience">
        <h2 className="workexperience-title">Work Experience</h2>
        <ul style={{ listStyleType: "none" }}>
        <li>
            <h3>
              <Link to="/Redwire">
                {" "}
                Hardware Engineering Internship at Redwire
              </Link>
            </h3>
            <p>May 2024 - Aug 2024</p>
            <p>Marlborough, MA</p>
          </li>
          <li>
            <h3>
              <Link to="/libertydefense">
                {" "}
                Altium Designer Consultant at Liberty Defense
              </Link>
            </h3>
            <p>May 2023 - June 2023</p>
            <p>Wilmington, MA</p>
          </li>
          <li>
            <h3>
              <Link to="/Tesla">
                {" "}
                Display Electrical Engineering Internship at Tesla
              </Link>
            </h3>
            <p>Jan 2022 - Aug 2022</p>
            <p>Palo Alto, CA</p>
          </li>
          <li>
            <h3>
              <Link to="/Fresenius">
                {" "}
                R&D Electrical Engineering Internship at Fresenius Medical Care
              </Link>
            </h3>
            <p>Jan 2021 - Aug 2021</p>
            <p>Lawrence, MA</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default WorkExperience;
