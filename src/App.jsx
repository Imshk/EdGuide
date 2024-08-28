import { useState } from 'react'
import React from 'react';
import Navbar from './Componets/Navbar/Navbar';
import Hero  from './Componets/Hero/Hero';
import Programs from './Componets/Programs/Programs';
import Title from './Componets/Title/Title';
import About  from './Componets/About/About';
import Campus from './Componets/Campus/Campus';
import Testimonials from './Componets/Testimonials/Testimonials';
import Contact from './Componets/Contact/Contact';
import Footer from './Componets/Footer/Footer';
function App() {
 

  return (
    
      <div>
        <Navbar/>
        <Hero/>
        <div className="container">
              <Title subTitle= 'Our PROGRAM' title='What We Offer'/>
              <Programs/>
              <About/>
              <Title subTitle= 'Gallary' title='Campus photos'/>
              <Campus/>
              <Title subTitle = 'TESTIMONIALS' title='What Students Says'/>
              <Testimonials/>
              <Title subTitle='Contact Us' title='Get in Touch'></Title>
              <Contact/>
              <Footer/>
        </div>
     
        
      </div>
     
    
  )
}

export default App;