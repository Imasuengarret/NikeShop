import React from 'react';
import Hero from './component/Hero'
import {heroapi} from './data/data'


function App() {
  
  return (
    <>
      <Hero heroApi ={heroapi}/>
    </>
  )
}

export default App
