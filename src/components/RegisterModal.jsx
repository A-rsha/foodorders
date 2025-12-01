import React, { useState } from "react";
import "./Modal.css";

function RegisterModal({ close, openLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("All fields required!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some((u) => u.email === email);

    if (exists) {
      alert("Email already exists!");
      return;
    }

    users.push({ id:Date.now(), name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    openLogin(); // Open login modal next
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={handleRegister}>Register</button>

        <p className="switch-text" onClick={openLogin}>
          Already have an account?
        </p>

        <button className="close-btn" onClick={close}>X</button>

      </div>
    </div>
  );
}

export default RegisterModal;
