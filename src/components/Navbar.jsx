import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import ProfilePage from '../Pages/ProfilePage';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

 

  const openLogin = () => {
    setShowRegister(false);
    setShowProfile(false);
    setShowLogin(true);
  };

  const openRegister = () => {
    setShowLogin(false);
    setShowProfile(false);
    setShowRegister(true);
  };

  const closeLogin = () => setShowLogin(false);
  const closeRegister = () => setShowRegister(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUserClick = () => {
    if (loggedUser) {
      setShowProfile(true);
    } else {
      openLogin(); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setShowProfile(false);
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <h1 className="logo">Foodify.</h1>

      {isMobile && (
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      )}

      <div className={`nav-links ${menuOpen && isMobile ? "active" : ""}`}>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </div>

      <button className="user-btn" onClick={handleUserClick}>
        👤
      </button>

      <button className="toggle-btn" onClick={() => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
      }}>
        {darkMode ? "🌙" : "☀️"}
      </button>

      {showLogin && (
        <LoginModal close={closeLogin} openRegister={openRegister} />
      )}

      {showRegister && (
        <RegisterModal close={closeRegister} openLogin={openLogin} />
      )}

      {showProfile && (
        <ProfilePage close={() => setShowProfile(false)} />
      )}

    </nav>
  );
}

export default Navbar;
