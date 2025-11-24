import React from 'react'
import './ContactPage.css'
function ContactPage() {
  return (
    <div className='contact'>

      <div className='contacthead'>
        <h1>Contact Us</h1>
        <p>We consider all the drivers of change gives you the components<br />you need to change to create atruly happiness</p>
      </div>

      <div className='contactform'>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder='Enter your name'

        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder='Enter email adress '

        /><br />
        <label>Subject</label>
        <input
          type="text"
          name="text"
          placeholder='Write a subject '

        /><br />
        <label>Message</label>
        <textarea name="message" placeholder='Write your message'></textarea>
      
       <div className='contactbtn'>
          <button type='submit'>Send</button>
       </div>
      </div>
      <div className='contactdown'>
        <div className='ch1'>
          <h1>Call Us:</h1>
          <p>+123-456-7890</p>
        </div>
        <div className='ch2'>
          <h1>Hours:</h1>
          <p>Mon-Fri: 11am-8pm<br />
            Sat-Sun:9am-10pm</p>
        </div>
        <div className='ch3'>
          <h1>Our Location:</h1>
          <p>UAE,khorfakhan</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage