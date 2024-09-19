import React from "react";
import "./Extracurriculars.css";
import { Link } from "react-router-dom";

function Extracurriculars() {
  return (
    <div className="workexperience-container">
      <section id="extracurriculars" className="extracurriculars">
        <h2 className="extracurriculars-title">Extracurriculars</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <h3>
              <Link to="/NER">
                {" "}
                Electrical Project Lead at Northeastern Electric Racing (NER)
              </Link>
            </h3>
            <p>Sep 2019 - Aug 2023</p>
            <p>Boston, MA</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Extracurriculars;
