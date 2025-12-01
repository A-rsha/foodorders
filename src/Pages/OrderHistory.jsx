import React from "react";
import './OrderHistory.css'

function OrderHistory() {
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (!order) {
    return <h2>No previous orders found!</h2>;
  }

  return (
    <div className="order-history">
      <h2>Your Order History</h2>

      <div className="order-box">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Total Amount:</strong> ₹{order.total}</p>
      </div>
    </div>
  );
}

export default OrderHistory;
