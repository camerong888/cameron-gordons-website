import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-container${menuOpen ? ' open' : ''}`}>
      <h1 className="header-title">Cameron Gordon</h1>
      <span className="menu-toggle" onClick={handleMenuToggle}>&#9776;</span>
      <nav>
        <ul className="header-nav">
          <li className="header-nav-item"><a className="header-nav-link" href="#home">Home</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="#about">About</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="#projects">Projects</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="#work-experience">Work Experience</a></li>
          <li className="header-nav-item"><a className="header-nav-link" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
