import React from "react";
import "./Navbar.css"; // Import CSS file for styling
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ display: "flex", gap: "600px" }}>
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="/services" className="navbar-link">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
