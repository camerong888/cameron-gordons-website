import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path, hash) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className={`header-container${menuOpen ? " open" : ""}`}>
      <h1 className="header-title">Cameron Gordon</h1>
      <span className="menu-toggle" onClick={handleMenuToggle}>
        &#9776;
      </span>
      <nav>
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
              onClick={() => handleNavigation("/", "projects")}
              to="/#projects"
            >
              Projects
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
      </nav>
    </header>
  );
}

export default Header;
