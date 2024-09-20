import './App.css'
import BusinessGrowth from './components/BusinessGrowth'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import GelatoConnect from './components/GelatoConnect'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OfferSection from './components/OfferSection'
import PercentSection from './components/PercentSection'
import Whychoose from './components/Whychoose'

function App() {
  return (
    <div className=''>
      <ContactUs/>
      <OfferSection />
      <Navbar />
      <HeroSection/>
      <PercentSection/>
      <Whychoose/>
      <BusinessGrowth/>
      <GelatoConnect/>
      <Footer/>
    </div>
  )
}

export default App
