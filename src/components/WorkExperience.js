import React from "react";
import "./WorkExperience.css";
import { Link } from "react-router-dom";

function WorkExperience() {
  return (
    <div className="workexperience-container">
      <h2 className="workexperience-title">Work Experience</h2>
      <section id="work-experience" className="workexperience">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/NER">
                {" "}
                Electrical Project Lead at Northeastern Electric Racing
              </Link>
            </h3>
            <p>Aug 2020 - Present</p>
            <p>Boston, MA</p>
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
