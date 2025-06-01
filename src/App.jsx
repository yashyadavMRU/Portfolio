import React from 'react'


/**
 *  Components
 */
import Header from './components/Header'
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cta from './components/Cta';


const App = () => {
  return(
     
     <>
      <Header/>
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <Testimonials />
      <Cta />
      <Footer />
     </>
  )
}

export default App;