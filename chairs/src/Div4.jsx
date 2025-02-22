import React from 'react'
import scott from './assets/images/scott.png'
import './App.css'
const Div4 = (props) => {
  return (
    <div className="div4">
           <div className="text">
           <h3 className="text1">{props.h1}</h3>
           <p className="text2">{props.p1}</p>
           
           <div className='cards'>
            <div className="card1">
                <h3>{props.h2}</h3>
                <p>{props.p2}</p>
            </div>
            <div className="card2">
                <h3>{props.h3}</h3>
                <p>{props.p3}</p>
            </div>
            <div className="card2">
                <h3>{props.h4}</h3>
                <p>{props.p4}</p>
            </div>
            <div className="card1">
                <h3>{props.h5}</h3>
                <p>{props.p5}</p>
            </div>
           </div>


           </div>
           <div className="image"><img className='img' src={scott}/>
           </div>
          </div>
  )
}

export default Div4
