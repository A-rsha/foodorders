import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';
import './OrderSummary.css'

function OrderSummary() {
    const cart = useSelector(state => state.cartReducer.value);
    const [showModal, setShowModal] = useState(false);
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );
    const handlePlaceOrder = () => {
        setShowModal(true);

      };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='cartpage'>
            {cart.length === 0 ? (
                <h2 className='empty'></h2>
            ) : (
                <div className='cartitem'>
                    {cart.map((item) => (
                        <div key={item.id} className='cartid'>
                            <img src={item.Image} width={120} className='itemimg' alt={item.name} />
                            <div>
                                <h3 className='itemleft'>{item.name}</h3>
                                <p className='itemleft'>price: ₹{item.price}-({item.quantity})</p>
                            </div>
                        </div>
                    ))}

                    <div className='btnwrap'>
                        <h2 className='carttotal'>Total:₹{total}</h2>
                    </div>

                    <button className='orderbtn' onClick={handlePlaceOrder}>place order</button>
                </div>
            )}

             {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <img src="catImg/success.png" alt="success" className='successicon' />
                        <h2>Order Plcaed Successfully🎉</h2>
                        <p>Your food is on the way!</p>

                        <button className="closebtn" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderSummary;
