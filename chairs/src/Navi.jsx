import React from 'react'
import { Link } from 'react-router-dom';    
import './App.css'
import myImage from "./assets/images/logo.png";
const Navi = () => {
  return (
   <header>
    <nav className='Navibar'>
     <div className="logo">
        <img src={myImage}/>
        <h2>SIT-FIT</h2>
     </div>
        <div className="nav-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            </div>
            <div><button className='btn1'>Register</button> </div>
    </nav>
   </header>
    
  )
}

export default Navi
