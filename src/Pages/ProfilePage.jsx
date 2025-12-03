import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

function ProfilePage({ close }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (loggedUser) setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    close();
        window.location.reload();
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name} 👋</h2>

      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        
        <button className="close-btn" onClick={close}>close</button>
      </div>
    </div>
  );
}

export default ProfilePage;
