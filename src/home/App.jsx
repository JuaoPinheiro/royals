import React from 'react'

import Header from '../components/Header'
import CarouselBanner from '../components/CarouselBanner'
import Products from '../components/Products/App'
import Services from '../components/Services'
import Others from '../components/Others'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import * as C from './styled'


function App() {
  return (
    <C.Container>
      <Header />
      <CarouselBanner />
      <Services />
      <Products />
      <Others />
      <About />
      <Contact />
      <Footer />
    </C.Container>
  )
}

export default App
