import React from "react"
import './Category.css'
const categories=[
  {id:1,name:"Pizza", Image:"/catImg/pizza.jpg"},
  {id:2,name:"Burger", Image:"/catImg/burger.jpg"},
  {id:3,name:"Desserts", Image:"/catImg/desserts.jpg"},
  {id:4,name:"Drinks", Image:"/catImg/drinks.jpg"},
  {id:5,name:"Salads", Image:"/catImg/salads.jpg"},
  {id:6,name:"Wraps", Image:"/catImg/wraps.jpg"},
]
function Category() {
  return (
    <div>
        <h1 className="heading">Categories</h1>
        <div className="categorycont">
          {categories.map((item) =>(
          <div key={item.id}>
            <img src={item.Image} width={200} className="foodimg"/>
            <h3 className="foodname">{item.name}</h3>
          </div>
         ))}
        </div>
    </div>
  )
}

export default Category