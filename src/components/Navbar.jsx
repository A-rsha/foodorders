import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
   const[darkMode,setDarkMode]= useState(false);
  return (
    <nav className={`container ${darkMode ? "dark" : "light"}`}>
        <h1 className='head'>Foodify.</h1>
        <div className='Nav-link'>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/Cart" >Cart</NavLink>
        <NavLink to="/About" >About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        </div>
        <div className="btn">
            <button onClick={()=> {setDarkMode(!darkMode)
             document.body.classList.toggle("dark-mode");
  }}
  >
                {darkMode ? '🌙 ' : '☀️ '}
            </button>
        </div>
    </nav>
  )
}

export default Navbar