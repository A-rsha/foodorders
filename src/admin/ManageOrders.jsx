import React, { useEffect, useState } from "react";
import './ManageOrders.css'
function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div>
      <h2>Manage Orders</h2>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        <div className="admin-list">
          {orders.map((o) => (
            <div key={o.id} className="item-card">
              <h4>Order ID: {o.id}</h4>
              <p>Address: {o.address}</p>
              <p>Total: ₹{o.total}</p>

              <h5>Items:</h5>
              <ul>
                {o.items.map((it) => (
                  <li key={it.id}>
                    {it.name} × {it.qty}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageOrders;
