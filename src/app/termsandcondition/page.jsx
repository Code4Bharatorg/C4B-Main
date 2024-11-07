import Footer from '@/components/layouts/footer/Footer'
import Navbar from '@/components/layouts/navbar/Navbar'
import TermsAndConditions from '@/components/TermsAndSecutiry/TermsAndConditions'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <TermsAndConditions/>
        <Footer/>
    </div>
  )
}

export default page