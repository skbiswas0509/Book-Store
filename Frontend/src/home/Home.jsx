import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import FreeBooks from '../components/FreeBooks'

const Home = () => {
  return (
    <>
    <Navbar/>
      <Banner/>
      <FreeBooks/>
      <Footer/>
    </>
  )
}

export default Home