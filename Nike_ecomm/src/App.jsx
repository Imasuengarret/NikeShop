import React from 'react';
import Hero from './component/Hero'
import {heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI} from './data/data'
import { FlexContent, Footer, Sales, Stories,  } from './component';


function App() {
  
  return (
    <>
   <main className='flex flex-col gap-16'>
      <Hero heroApi ={heroapi}/>
      <Sales endpoint = {popularsales} ifExists/>
      <FlexContent endpoint = {highlight} ifExists/>
      <Sales endpoint = {toprateslaes}/>
      <FlexContent endpoint = {sneaker}/>
      <Stories story={story}/>
   </main>
   <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App
