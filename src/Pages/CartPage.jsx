import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFood } from '../features/cart/cartSlice'
import { plusFood } from '../features/cart/cartSlice'
import { minusFood } from '../features/cart/cartSlice'
import { dltFood } from '../features/cart/cartSlice'
import './CartPage.css'
import { useNavigate } from 'react-router-dom'

function CartPage() {
    const cart = useSelector(state => state.cartReducer.value)
    const dispatch = useDispatch()
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )
    const navigate = useNavigate();
    const handleCheckout=()=>{
        navigate('/order-summary')
    }
    return (
        <div className='cartpage'>
            <h1 className='head'>shopping Cart</h1>
            {cart.length === 0 ? (
                <h2 className='empty'>your cart is empty</h2>
            ) : (
                <div className='cartitem'>
                    {cart.map((item) => (
                        <div key={item.id} className='cartid'>
                            <img src={item.Image} width={120} className='itemimg' />

                            <div>
                                <h3 className='itemleft'>{item.name}</h3>
                                <p className='itemleft'>price: ₹{item.price}</p>

                                <div className='itemright'>
                                    <button onClick={() => dispatch(plusFood(item.id))} className='qty1btn'>+</button>

                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(minusFood(item.id))} className='qty2btn'>-</button>
                                </div>
                            </div>

                            <button onClick={() => dispatch(dltFood(item.id))} className='removebtn'>Remove</button>
                        </div>
                    ))}


                    <div className='btnwrap'>
                                            <h2 className='carttotal'>Total:₹{total}</h2>
                      <button onClick={() => dispatch(removeFood())} className='clearbtn'>Clear Cart</button>
                    </div>
                    <button  className='orderbtn' onClick={handleCheckout}>checkout</button>

                </div>
            )}
        </div>
    )
}
export default CartPage;