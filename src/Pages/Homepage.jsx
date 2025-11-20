import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Category from '../components/Category'
import FoodCard from '../components/FoodCard'

function Homepage() {
  return (
    <div>
        <div>
          <Banner/>
      <Category/>
      <FoodCard/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Homepage