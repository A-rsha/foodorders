import React, { useState } from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";


function RegisterModal({ close, openLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [role, setRole] = useState("User");
 
const navigate = useNavigate();

  const handleRegister = (e) => {
    e?.preventDefault?.();
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

  const newUser = { id: Date.now(), name, email, password, role: role.toLowerCase() };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("loggedUser", JSON.stringify(newUser));


    alert("Registration Successful!");
    close && close(); 

        if (role.toLowerCase() === "admin") navigate("/admin");
    else navigate("/"); 
  };
  const stop = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={() => close && close()}>
      <div className="modal-box" onClick={stop}>

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

           <select onChange={(e) => setRole(e.target.value)}  value={role}  className="options">
           <option value="User">User</option>
           <option value="Admin">Admin</option>
           </select>

        <button onClick={handleRegister}>Register</button>

        <p className="switch-text" onClick={() => { close && close(); openLogin && openLogin(); }}>
          Already have an account?
        </p>

    <button type="button" className="close-btn" onClick={close}>Close</button>

      </div>
    </div>
  );
}

export default RegisterModal;
