import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
     <div className='banner-content'>
        <h1 className='head1'>Welcome to Foodify.</h1>
        <p className='para'>Your favorite food, just a click away.<br/>
        Fresh. Fast. Flavourful</p>
       <Link to="/Menu" className='button'>Order Now</Link>
    </div>
    </div>
  )
}

export default Banner