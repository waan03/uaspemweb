import "./globals.css";
import Image from 'next/image'
import React from 'react'
 
export default function NotFound() {
 
  return (
    <>
      <div className="error-page w-full bg-gradient-radial from-SecondaryColor to-PrimaryColor h-screen">
          <nav className='w-full px-10 py-10'>
            
          </nav>

          <div className="error-box flex flex-col justify-between items-center h-[80%]">
            <div className="not-found-box text-center">
              <h1 className="text-[15rem] leading-none font-bold text-white">404</h1>
              <p className="light text-2xl text-white mt-5 tracking-[0.3em]">PAGE NOT FOUND</p>
            </div>

            <Image src="/assets/images/HeroLogo.png" width={300} height={300} alt='Logo' />

          </div>
      </div>
  </>
  )
}