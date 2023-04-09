import React from "react";
import "./Contact.css";

function Contact() {
  const personalEmail = "camerong888" + "@" + "gmail.com";
  const educationalEmail = "gordon.ca" + "@" + "northeastern.edu";
  const linkedInUrl = "https://" + "www.linkedin.com" + "/in/gordonca/";

  return (
    <div className="contact-container">
      <section id="contact" className="contact">
      </section>
        <h2 className="contact-title">Contact</h2>
        <ul style={{ listStyleType: "none" }}>
          <li>
            Personal: <a href={`mailto:${personalEmail}`}>{personalEmail}</a>
          </li>
          <li>
            Educational:{" "}
            <a href={`mailto:${educationalEmail}`}>{educationalEmail}</a>
          </li>
        </ul>
        <p>
          LinkedIn:{" "}
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            {linkedInUrl}
          </a>
        </p>
      
    </div>
  );
}

export default Contact;
