import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <div className="work-experience-container">
      <h2 className="work-experience-title">Work Experience</h2>
      <section id="work-experience" className="work-experience">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <h3>Electrical Project Lead at Northeastern Electric Racing</h3>
            <p>Aug 2020 - Present</p>
          </li>
          <li>
            <h3>Display Electrical Engineering Internship at Tesla</h3>
            <p>Jan 2022 - Aug 2022</p>
          </li>
          <li>
            <h3>R&D Electrical Engineering Internship at Fresenius Medical Care</h3>
            <p>Jan 2021 - Aug 2021</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default WorkExperience;
