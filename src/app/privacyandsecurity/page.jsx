import Footer from '@/components/layouts/footer/Footer'
import Navbar from '@/components/layouts/navbar/Navbar'
import PrivacyAndSecurity from '@/components/TermsAndSecutiry/PrivacyAndSecurity'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PrivacyAndSecurity/>
        <Footer/>
    </div>
  )
}

export default page