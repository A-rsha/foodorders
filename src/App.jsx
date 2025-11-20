import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Banner from './components/Banner'


function App() {
  return (
    <div>
      <Navbar/>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}

export default App