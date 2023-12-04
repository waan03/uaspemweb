import React from 'react'
import { navbar as Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='h-screen bg-white'>
      <p className='text-black'>About Us</p>

    </div>
    <Footer/>
    </>
  )
}

export default page