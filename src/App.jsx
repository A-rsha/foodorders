import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeLogin = () => setShowLogin(false);
  const closeRegister = () => setShowRegister(false);

  return (
    <div>
    
      <Navbar openLogin={openLogin} openRegister={openRegister} />

      <div>
        <Outlet />
      </div>

      <Footer />

     
      {showLogin && (
        <LoginModal close={closeLogin} openRegister={openRegister} />
      )}
      {showRegister && (
        <RegisterModal close={closeRegister} openLogin={openLogin} />
      )}
    </div>
  );
}

export default App;
