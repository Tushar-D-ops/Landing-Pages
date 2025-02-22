import React from 'react'
import bruno from './assets/images/scott.png'
import './App.css'
const Div1 = () => {
  return (
    <div>
      <div className="div1">
       <div className="text">
       <h3 className="text1">The Most Confortable Chair For You</h3>
       <p className="text2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto delectus, laboriosam quam voluptate aliquam maxime cumque id dignissimos dolores dicta expedita cupiditate vel explicabo molestias!</p>
      <div className="btns">
        <button className="btn1">Shop Now</button>
      <button className="btn2">60% off</button>
      </div>
      </div>
       <div className="image"><img className='img' src={bruno}/>
       </div>
      </div>
    </div>
  )
}

export default Div1;
