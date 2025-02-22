import React from 'react'
import logo from './assets/images/logo.png'
import './App.css'

const Footer = () => {
  return (
    <div>
      <footer>
      <div class="logo-container">
        <h1 className='text1'>SIT-FIT</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div class="about-company">
        <div class="container">
          <h1>About</h1>
          <p>News & Blog</p>
          <p>Features</p>
          <p>About Us</p>
        </div>
        <div class="container">
          <h1>Company</h1>
          <p>How We Work?</p>
          <p>Capital</p>
          <p>Security</p>
        </div>
        <div class="container">
          <h1>Support</h1>
          <p>FAQs</p>
          <p>Support</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
