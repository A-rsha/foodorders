import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

function LoginModal({ close, openRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e?.preventDefault?.();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      alert("Invalid email or password!");
      return;
    }

    // Save logged in user
    localStorage.setItem("loggedUser", JSON.stringify(validUser));
    alert("Login Successful!");

    close && close(); 
    const redirect = localStorage.getItem("redirectAfterLogin");

    if (redirect) {
      navigate(redirect);
      localStorage.removeItem("redirectAfterLogin");
      return;
    }

  
    const role = (validUser.role || "user").toLowerCase();
    if (role === "admin") {
      navigate("/admin");
      return;
    }


    navigate("/");
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={() => close && close()}>
      <div className="modal-box" onClick={stop}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

      
        <p
          className="switch-text"
          onClick={() => {
            close && close();
            openRegister && openRegister();
          }}
        >
          Register an account?
        </p>

        <button type="button" className="close-btn" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
