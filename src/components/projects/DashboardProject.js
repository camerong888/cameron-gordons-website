import React from "react";
import "./DashboardProject.css";
import DashboardPicture from "../../assets/dashboardproject/dashboard.jpeg";

function DashboardProject() {
  return (
    <div className="dashboard-project">
      <h1>Dashboard Project</h1>
      <p>2022 Competition Year</p>
      <img
        src={DashboardPicture}
        alt="Dashboard Project (2022 Comp Year)"
        className="dashboard-picture"
      />
      <p>Here's some information about the project:</p>
      <ul>
        <li>
          Directed mechanical and electrical development of the formula-style
          electric vehicle's driver interfaces, including the entire vehicle
          dashboard, electrical control systems, and brake light control
          systems.
        </li>
        <li>
          Integrated CAN Bus modules via Arduino microcontrollers to enable
          robust subsystem communications.
        </li>
      </ul>
    </div>
  );
}

export default DashboardProject;
