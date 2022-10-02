import React from 'react'
import Brands from './components/brands/Brands'
import Collections from './components/collections/Collections'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Collections />
      <Products />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App