import React from 'react'
import './AboutPage.css'
function AboutPage() {
  return (
    <div className='aboutcontainer'>
      <div className='leftside'>
        <img src="/catImg/aboutpizz.jpg" width={400} className='aboutimg' />
        <div className="contactBox">
          <div><span>📞</span> 123-456-7890</div>
          <div><span>✉</span> Foodify.grps@gmail.com</div>
          <div><span>📍</span>UAE,khorfakhan</div>
        </div>
      </div>
      <div className='hcontainer'>
        <h1 className='h1a'>We provide healthy<br />
          food for your family</h1>
        <p className='h2a'>Our story began with a vision to create a unique dining experience<br /> that merges fine dining,exceptional service, and a vibrant ambiance.<br />Rooted in city's rich culinary culture,we aim to honor our local roots while infusing a global palate.</p>
        <p className='h3a'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Voluptatem laborum illum dolorum rerum neque laudantium <br />odio ipsum dolorem sed consequuntur esse labore eaque vitae fugit, provident nulla at praesentium et!</p>
      </div>

      <div className='about2'>
        <div className='rightimg'>
          <img src="/catImg/dining.jpg" width={400} />
        </div>

        <div className='lefttxt'>
          <div>
            <h1>A little information<br />
              for our valuable guest</h1>
            <p>At place,we believe that dining is not just about food,but also about the<br />overall experience.Our staff,renowned for their warmth and dedication,<br />strives to make every visit an unforgettable event.</p>
          </div>
          <div className='left1'>
            <p>3<br />
              Locations</p>
            <p>2005<br />
              Founded</p>
            <p>45+<br />
              Staff Members</p>
            <p>100%<br />
              Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
