import Footer from '@/components/layouts/footer/Footer'
import Navbar from '@/components/layouts/navbar/Navbar'
import VerifyCertificate from '@/components/Verify/VerifyCertificate'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <VerifyCertificate/>
        <Footer/>
    </div>
  )
}

export default page