import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <section id="contact" className="contact">
        {/* <p>Emails:</p> */}
        <ul>
          <li>Personal: <a href="mailto:camerong888@gmail.com">camerong888@gmail.com</a></li>
          <li>Educational: <a href="mailto:gordon.ca@northeastern.edu">gordon.ca@northeastern.edu</a></li>
        </ul>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/gordonca/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/gordonca/</a></p>
        <p>Phone: <a href="tel:858-413-6322">858-413-6322</a></p>
      </section>
    </div>
  );
}

export default Contact;
