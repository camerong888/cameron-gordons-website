import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header({ toggleTheme, currentTheme }) { // Props can remain, but button is removed
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path, hash) => {
    navigate(path);
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        const headerHeight = document.querySelector('header').offsetHeight || 80; 
        const yOffset = -headerHeight - 20; 
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' }); 
      }
    }, 100);
  };

  return (
    <header className={`header-container${menuOpen ? " open" : ""}`}>
      <Link onClick={() => handleNavigation("/", "home")} to="/#home">
        <h1 className="header-title">Cameron Gordon</h1>
      </Link>
      <span className="menu-toggle" onClick={handleMenuToggle}>
        &#9776;
      </span>
        <ul className="header-nav">
          <li className="header-nav-item">
            <Link
              className="header-nav-link"
              onClick={() => handleNavigation("/", "home")}
              to="/#home"
            >
              Home
            </Link>
          </li>
          <li className="header-nav-item">
            <Link
              className="header-nav-link"
              onClick={() => handleNavigation("/", "work-experience")}
              to="/#work-experience"
            >
              Work Experience
            </Link>
          </li>
          <li className="header-nav-item">
            <Link
              className="header-nav-link"
              onClick={() => handleNavigation("/", "projects")}
              to="/#projects"
            >
              Projects
            </Link>
          </li>
          <li className="header-nav-item">
            <Link
              className="header-nav-link"
              onClick={() => handleNavigation("/", "extracurriculars")}
              to="/#extracurriculars"
            >
              Extracurriculars
            </Link>
          </li>
          <li className="header-nav-item">
            <Link
              className="header-nav-link"
              onClick={() => handleNavigation("/", "about")}
              to="/#about"
            >
              About
            </Link>
          </li>
          <li className="header-nav-item">
            <Link
              className="header-nav-link"
              onClick={() => handleNavigation("/", "contact")}
              to="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;