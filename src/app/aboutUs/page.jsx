import React from 'react'
import { navbar as Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from 'next/image';

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='h-screen bg-white flex justify-center items-center '>
        <div className='flex w-fit px-80 justify-center items-center'>
          <div className='flex flex-col pr-10 '>
            <Image
              
              src="/assets/images/LogoDark.svg"
              alt='Logo'
              width={300}
              height={300}
            />
            <p className='text-[#15141F] text-4xl flex'>Lorem Ipsum</p>
          </div>
          <div className='w-96 border-l-4 border-[#15141F]'>
              <p className='text-black px-8 '>
              Lorem ipsum dolor sit amet consectetur. Dolor vestibulum leo nec massa nulla magna. Adipiscing aliquet mattis sed elementum erat nascetur tellus turpis. Consequat convallis nisl tellus ornare tortor feugiat enim urna hendrerit. Diam mi diam commodo volutpat lectus est. A vitae morbi vitae vulputate lorem vitae ultricies at. Ut egestas diam tellus fringilla duis cras. 

              At ullamcorper molestie ipsum amet est diam bibendum. Euismod faucibus iaculis convallis eu dolor mauris quis rutrum ac. Consectetur interdum gravida vitae lacus cras.
              Leo sodales eget ultrices tristique accumsan pharetra sit id. Aliquam eget enim eu sem est nisl at lacinia cursus.
              </p>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page