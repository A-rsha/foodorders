import React from "react";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-logo">
          <h2>Foodify.</h2>
          <p>Fresh, fast and delicious food delivered at your doorstep.</p>
        </div>

      
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Cart">Cart</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>


        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@foodify.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: Kochi, Kerala</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Foodify. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
