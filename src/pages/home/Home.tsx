import global from "../../assets/styles/global.module.css"
import styles from "./Home.module.css"

import Header from "../../components/header/Header.tsx"
import Hero from "../../components/hero/Hero.tsx"
import AboutUs from "../../components/about-us/AboutUs.tsx"
import Directors from '../../components/directors/Directors.tsx'
import Footer from '../../components/footer/Footer.tsx'
import OurServices from '../../components/our-services/OurServices.tsx'
import TalkToUs from '../../components/talk-to-us/TalkToUs.tsx'
import WhyChooseUs from '../../components/why-choose-us/WhyChooseUs.tsx'


function Home() {
    return(
    <>
      <Header/>
      <Hero/>
      <div className={global.container}>  
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

export default Home
