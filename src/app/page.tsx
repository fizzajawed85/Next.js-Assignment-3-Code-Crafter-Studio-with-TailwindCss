import React from 'react';
import Hero from './components/Hero/Hero';
import About from './About/page';
import Collaborate from './Collaborate/page';
import Expertise from './Expertise/page';



export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Expertise/>
      <Collaborate/>
      
      </div>
    
  );
}
