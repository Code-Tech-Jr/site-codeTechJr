import { useState } from 'react'
import Header from "../Header/index.tsx"
import Hero from "../Hero/index.tsx"
import AboutUs from "../AboutUs/index.tsx"
import Directors from '../Directors/index.tsx'
import Footer from '../Footer/index.tsx'
import OurServices from '../OurServices/index.tsx'
import TalkToUs from '../TalkToUs/index.tsx'
import WhyChooseUs from '../WhyChooseUs/index.tsx'


import "./App.css"
import "../../assets/styles/global.css"

function App() {

  return(
    <>
      <div className="container">
        <Header/>
        <Hero/>
        <AboutUs/>
        <OurServices/>
        <WhyChooseUs/>
        <TalkToUs/>
        <Directors/>
      </div>
      <Footer/>
    </>
  );
}

export default App
