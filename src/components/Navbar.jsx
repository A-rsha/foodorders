import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Foodify.</h1>

      <div className="nav-links">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>

      <button 
        className="toggle-btn"
        onClick={() => {
          setDarkMode(!darkMode);
          document.body.classList.toggle("dark-mode");
        }}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;
