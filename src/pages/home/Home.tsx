import AboutUs from '../../components/aboutUs/AboutUs'
import Differ from '../../components/differ/Differ'
import Directors from '../../components/directors/Directors'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import OurServices from '../../components/ourService/OurServices'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'
import TalkToUs from '../../components/talkToUs/TalkToUs'
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <Differ />
      <TalkToUs />
      <Directors />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home
