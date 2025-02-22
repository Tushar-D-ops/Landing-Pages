import { useState } from 'react'
import './App.css'
import Navi from './Navi'
import Div1 from './Div1'
import Div2 from './Div2'
import Div3 from './Div3'
import Div4 from './Div4'
import Div5 from './Div5'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Container'>
        <Router>
        <Navi />
       <main>

       <Routes>
       <Route path="/" element={
        <>
        <Div1 />
        <hr />
        <Div3/>
        <hr/>
        <Div2/>
        <hr/>
        <Div4 h1={"Why Choose Us"} p1= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, numquam sit sapiente cupiditate velit recusandae!"}
              h2={"Longevity"}  p2={"Strong build quality lets us stand out"}
              h3={"Quality"}    p3={"Strong build quality lets us stand out"}
              h4={"Heritage"}   p4={"The heritage lets us stand out"}
              h5={"Services"}   p5={"Our overall services lets us stand out"}
        
       
        />
         <hr/>
        <Div5 h1={"Best Features"} p1= {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, numquam sit sapiente cupiditate velit recusandae!"}
              h2={"Delivery"}  p2={"Fastest delivery among all competitors"}
              h3={"Gurantee"}    p3={"Strong build quality lets us stand out"}
              h4={"Free Repair"}   p4={"Free Repair around the world"}
              h5={"Customer Care"}   p5={"24/7 customer care services"}
        
        
        />
       </>
       }/>
        
          <Route path='/About' element={<About/>}/>
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes>
       </main>

       <hr/>
       
       <Footer/>
       
          
       

        </Router>
      </div>
    </>
  )
}

export default App
