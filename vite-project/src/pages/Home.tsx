import React from 'react'
import Navbar  from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Stats/>
    <Products/>
    <NewsLetter/>
    <Footer/>

    </>
  )
}
