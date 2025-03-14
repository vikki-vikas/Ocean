import AboutUs from './AboutUs'
import './App.css'
import Carosule from './Carosule'
import Faq from './Faq'
import FreeConsultation from './FreeConsultation'
import Growth from './Growth'
import Header from './Header'
import HeroSection from './HeroSection'
import OurTeam from './OurTeam'
import PeopleTalks from './PeopleTalks'
import ProvenResults from './provenResults'
import Services from './Services'
import WhyOcen from './WhyOcen'


function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <ProvenResults />
      <PeopleTalks />
      <WhyOcen />
      <Services />
      <Carosule />
      <FreeConsultation />
      <AboutUs />
      <OurTeam />
      <Growth />
      <Faq />
      <div className='grid place-items-center p-6 text-white border-t' >
        <p className='text-xs' >Copyright © 2024 Ocean ad agency. All rights reserved. Terms of use Legal</p>
      </div>
    </>
  )
}

export default App
