import React, { useState } from "react";
import "./Modal.css";

function LoginModal({ close, openRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      alert("Invalid email or password!");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(validUser));

    alert("Login Successful!");
    close(); // close modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

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

        <p className="switch-text" onClick={openRegister}>
          Create an account?
        </p>

        <button className="close-btn" onClick={close}>close</button>
      </div>
    </div>
  );
}

export default LoginModal;
