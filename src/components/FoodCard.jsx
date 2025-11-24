import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FoodCard.css'
import { addFoodToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

addFoodToCart

function FoodCard() {
    const dispatch = useDispatch();
const addToCart = (item) => dispatch(addFoodToCart(item));
    return (
        <div>
            <h1 className='fheading'>Featured Foods</h1>
            <div className='cardcontainer'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/catImg/caramel.jpg" width={200} className='images' />
                    <Card.Body className='cardbody'>
                        <Card.Title className='h1'>Caramel Dessert</Card.Title>
                        <Card.Text className='cardtext'>
                            Foodify. special tasty Caramel Dessert<br />
                            price:₹179
                        </Card.Text>
                        <Button variant="primary" className='button' onClick={() => addToCart({  id: 6, name: "Caramel Dessert", category: "Dessert", Image: "/catImg/caramel.jpg", price: 179 })}>Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/catImg/cheeseburg.jpg" width={200} className='images'/>
                    <Card.Body className='cardbody'>
                        <Card.Title className='h1'>Cheese Blast Burger</Card.Title>
                        <Card.Text className='cardtext'>
                           Extra cheese with a soft juicy patty.<br />
                            price:₹359
                        </Card.Text>
                        <Button variant="primary" className='button'   onClick={() => addToCart({ id: 5, name: "Chees Burger", category: "Burger", Image: "/catImg/cheeseburg.jpg", price: 349 })}>Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/catImg/pizza1.jpg" width={200} className='images'/>
                    <Card.Body className='cardbody'>
                        <Card.Title className='h1'>Veggie Delight</Card.Title>
                        <Card.Text className='cardtext'>
                            Bell peppers, olives, sweet corn & onions.<br />
                            price:₹249
                        </Card.Text>
                        <Button variant="primary" className='button'  onClick={() => addToCart(items)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/catImg/falafelwrap.jpg" width={200} className='images'/>
                    <Card.Body className='cardbody'>
                        <Card.Title className='h1'>Falafel Hummus Wrap</Card.Title>
                        <Card.Text className='cardtext'>
                            Middle-east style falafel + hummus + veggies.<br />
                            price:₹289
                        </Card.Text>
                        <Button variant="primary" className='button'   onClick={() => addToCart(items)}>Add to Cart</Button>
                    </Card.Body>
                </Card>
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/catImg/shake.jpg" width={200} className='images'/>
                    <Card.Body className='cardbody'>
                        <Card.Title className='h1'>Chocolate Milkshake</Card.Title>
                        <Card.Text className='cardtext'>
                           Thick shake with real chocolate milkshake.<br />
                            price:₹190
                        </Card.Text>
                        <Button variant="primary" className='button'   onClick={() => addToCart( { id: 10, name: "Chocolate Milkshake", category: "Drinks", Image: "/catImg/shake.jpg", price: 190 })}>Add to Cart</Button>
                    </Card.Body>
                </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/catImg/fruit.jpg" width={200} className='images'/>
                    <Card.Body className='cardbody'>
                        <Card.Title className='h1'>Fruit Splash Salad</Card.Title>
                        <Card.Text className='cardtext'>
                            Apples, pineapple, watermelon, grapes with honey.<br />
                            price:₹299
                        </Card.Text>
                        <Button variant="primary" className='button'   onClick={() => addToCart( { id: 7, name: "Fruit salad", category: "Salads", Image: "/catImg/fruit.jpg", price: 179 })}>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default FoodCard