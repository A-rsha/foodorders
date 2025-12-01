import React, { useState } from 'react'
import './MenuPage.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addFoodToCart } from '../features/cart/cartSlice';

function MenuPage() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.value);
  
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

const foods = [
  { id: 1, name: "Pepperoni Burst", category: "pizza", Image: "/catImg/pizza.jpg", price: 340 },
  { id: 2, name: "veggie pizza", category: "pizza", Image: "/catImg/pizza1.jpg", price: 249 },
  { id: 3, name: "Vanilla Ice Cream Sundae", category: "Dessert", Image: "/catImg/vanilla.jpg", price: 180 },
  { id: 4, name: "classic chicken Burger", category: "Burger", Image: "/catImg/burger.jpg", price: 300 },
  { id: 5, name: "Chees Burger", category: "Burger", Image: "/catImg/cheeseburg.jpg", price: 349 },
  { id: 6, name: "Caramel Dessert", category: "Dessert", Image: "/catImg/caramel.jpg", price: 179 },
  { id: 7, name: "Fruit salad", category: "Salads", Image: "/catImg/fruit.jpg", price: 179 },
  { id: 8, name: "Chicken Tikka Wrap", category: "Wraps", Image: "/catImg/wraps.jpg", price: 199 },
  { id: 9, name: "Strawberry Smoothie", category: "Drinks", Image: "/catImg/smoothie.jpg", price: 70 },
  { id: 10, name: "Chocolate Milkshake", category: "Drinks", Image: "/catImg/shake.jpg", price: 190 },
  { id: 11, name: "Lemon Mint Cooler", category: "Drinks", Image: "/catImg/lemon.jpg", price: 60 },
  { id: 12, name: " Chocolate Brownie", category: "Dessert", Image: "/catImg/brownie.jpg", price: 200 },
  { id: 13, name: "Paneer Masala Wrap", category: "Wraps", Image: "/catImg/paneer.jpg", price: 199 },
  { id: 14, name: "Double Trouble Burger", category: "Burger", Image: "/catImg/doubleburg.jpg", price: 249 },
  { id: 15, name: "Margherita Classic", category: "pizza", Image: "/catImg/margerita.jpg", price: 290 },
  { id: 16, name: "Cold Coffee", category: "Drinks", Image: "/catImg/cold.jpg", price: 90 },
  { id: 17, name: "Veggie Crunch Salad", category: "Salads", Image: "/catImg/saldey.jpg", price: 129 },
  { id: 18, name: "BBQ Chicken Pizza", category: "pizza", Image: "/catImg/bbq.jpg", price: 329 },
  { id: 19, name: "Veg Crispy Wrap", category: "Wraps", Image: "/catImg/crispy.jpg", price: 159 },
  { id: 20, name: "Falafel Hummus Wrap", category: "Wraps", Image: "/catImg/falafelwrap.jpg", price: 189 },
  { id: 21, name: "Avocado Fresh Bowl", category: "Salads", Image: "/catImg/avocado.jpg", price: 229 },
  { id: 22, name: "Mango Lassi", category: "Drinks", Image: "/catImg/lassi.jpg", price: 110 },
  { id: 23, name: "Iced Lemon Tea", category: "Drinks", Image: "/catImg/iced.jpg", price: 70 },
  { id: 24, name: "fig Caesar Salad", category: "Salads", Image: "/catImg/fig.jpg", price: 145 },
];
  const filteredfood = foods.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(searchText.toLowerCase()) ||
      food.category.toLowerCase().includes(searchText.toLowerCase());

          const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

    const categories = ["All", "pizza", "Burger", "Drinks", "Dessert", "Wraps", "Salads"];

  const addToCart = (item) => dispatch(addFoodToCart(item));

  return (
    <div >
      <div className='topbar'>
      <input className='inputaea' type="text" placeholder='Search Food...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <Link to="/Cart" className="cart-count">🛒 {cart.length > 0 && <span className='cart-badge'>{cart.length}</span>}</Link>
      </div>



      <div className='mcontainer'>
        {filteredfood.length > 0 ? (
          filteredfood.map(items => (
            <div key={items.id} className='itembody'>
              <img src={items.Image} width={200} className='foodimg' />
              <h3 className='item'>{items.name}</h3>
              <p className='price'>Price: ₹{items.price}</p>
              <Button
                variant="primary"
                className='button'
                onClick={() => addToCart(items)}
              >
                Add to Cart
              </Button>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}
export default MenuPage