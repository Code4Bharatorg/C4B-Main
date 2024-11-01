import React from 'react'
import Navbar from '../layouts/navbar/Navbar'
import Footer from '../layouts/footer/Footer'
import HeroSection from './ClientCard/HeroSection'
import Clientsec from '../Clients/ClientsSec/ClientsSec'
const Client = () => {
  return (
    <div className='w-full h-full bg-[#F9F7F7] text-[#112D4E]'>
        <Navbar/>
        <HeroSection/>
        <Clientsec/>
        <Footer/>
    </div>
  )
}

export default Client