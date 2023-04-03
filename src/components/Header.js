import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Cameron Gordon</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
