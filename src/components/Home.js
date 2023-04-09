import React from "react";
import "./Home.css";
import profilePicture from "../assets/camerongordon.jpg";

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to my personal website!</h2>
      <section id="home" className="home">
        <img
          src={profilePicture}
          alt="Cameron Gordon"
          className="profile-picture"
        />
        <p>
          Here, you can learn more about my background, view my projects, and
          get in touch with me.
        </p>
      </section>
    </div>
  );
}

export default Home;
