import React from 'react'
import bruno from './assets/images/bruno.png'
import danil from './assets/images/daniil2.png'
import pexels from './assets/images/pexels.png'
import './App.css'

const Div3 = () => {
  return (
    <div className='div3'>
    <div>
    <h1 className='text1'> Shop Popular Categories</h1>
    </div>
    <div className='div3-category'>
        <div className='product'>
            <div className='image1'>
         <img className='img1' src={bruno}/>
         </div>
         <h3 className='text2'>Work Chair</h3>
         <p className='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='product'>
         <div className='image1'>
            <img className='img1' src={danil}/>
            </div>
         <h3 className='text2'>Work Chair</h3>
         <p className='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='product'>
         <div className='image1'>
            <img className='img1' src={pexels}/>
            </div>
         <h3 className='text2'>Work Chair</h3>
         <p className='text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        
        
    </div>
    <div class="b-container">
        <button>&#x2190;</button>
        <button>&rarr;</button>
      </div>
        
      
    </div>
  )
}

export default Div3
