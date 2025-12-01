import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Admin.css'
function AdminDashboard() {
  return (
    <div className='admin-container'>
        <aside className="admin-sidebar">
            <h2 className="admin-title">Admin Panel</h2>

             <nav>
                <NavLink to="products" className="admin-link">Manage Products</NavLink>
                <NavLink to="orders" className="admin-link"> Manage Orders</NavLink>
                <NavLink to="users" className="admin-link">Manage Users</NavLink>
             </nav>
        </aside>

        <main className="admin-main">
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminDashboard