import React from 'react'
import './ManageUsers.css'
function ManageUsers() {
     const users = JSON.parse(localStorage.getItem("users")) || [];
     
  return (
    <div>
        <h2>Manage Users</h2>

        {users.length === 0 ?(
            <p>No registered users</p>
        ):(
            <div className="admin-list">
                {users.map((u) =>(
                    <div key={u.id} className="item-card">
                        <h4>{u.name}</h4>
                        <p>{u.email}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default ManageUsers