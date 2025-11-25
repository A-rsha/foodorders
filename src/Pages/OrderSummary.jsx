import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa"; // react-icons install ചെയ്‌ത് ഉപയോഗിക്കുക
import "./OrderSummary.css";
import "./CartPage.css";

function OrderSummary() {
  const cart = useSelector((state) => state.cartReducer.value);
  const [showModal, setShowModal] = useState(false);

  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);


  const [isEditing, setIsEditing] = useState(false);

  const [paymentMethod, setPaymentMethod]= useState("COD")

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleUseLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      alert("Your browser does not support location access.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          if (data && data.display_name) {
            setAddress(data.display_name);
          } else {
            alert("Unable to fetch address, try again.");
          }
        } catch (error) {
          alert("Failed to detect address.");
        }
        setLoading(false);
      },
      (error) => {
        alert("Please allow location permission in the browser.");
        setLoading(false);
      }
    );
  };

  const handlePlaceOrder = () => {
    if (address.trim() === "") {
      alert("Please enter your address before placing order!");
      return;
    }

    if(!paymentMethod){
        alert("Please select a payment method!");
        return;
    }
    console.log("Placing order with payment method:",paymentMethod);
    setShowModal(true);
  };

  return (
    <div className="cartpage">
      {cart.length === 0 ? (
        <h2 className="empty">Your cart is empty</h2>
      ) : (
        <div className="cartitem">
          {/* Cart Items */}
          {cart.map((item) => (
            <div key={item.id} className="cartid">
              <img src={item.Image} width={120} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Subtotal: ₹{item.price}</p>
                
              </div>
            </div>
          ))}

          <h2 className="carttotal">Total: ₹{total}</h2>

          <div className="address-box">
            <h3 className="location-heading">Location ✏️</h3>


            {!isEditing ? (
              <div className="location-display">
                <span className="location-text">
                  {address || "No address set"}
                </span>
                <FaPencilAlt
                  className="edit-icon"
                  onClick={() => setIsEditing(true)}
                />
              </div>
            ) : (
              <div className="address-edit">
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address"
                  rows="3"
                />
                <div className="save-cancel-btns">
                  <button
                    className="save-btn"
                    onClick={() => {
                      setIsEditing(false);
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => {
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
                <button
                  className="locationbtn small-btn"
                  onClick={handleUseLocation}
                >
                  {loading ? "Detecting..." : "Use Current Location"}
                </button>
              </div>
            )}
          </div>
           <div className="payment-method-box">
            <h3>Select Payment Method</h3>

            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Card"
                checked={paymentMethod === "Card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit / Debit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
</div>
          <button className="orderbtn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <img src="catImg/success.png" className="successicon" />
            <h2>Order Placed Successfully 🎉</h2>
            <p>Your food is on the way!</p>
            <button className="closebtn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
