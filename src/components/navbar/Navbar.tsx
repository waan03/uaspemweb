import React from 'react'
import { FaUser } from "react-icons/fa";
import Image from "next/image";

export function navbar() {


  return (
    <>
    <header className="sticky top-0 z-30 w-full p-0 shadow drop-shadow-">
    <div className='bg-[#15141F] w-full p-0 h-auto z-40'>
        <div className='py-8 pl-32 flex justify-between items-center'>
            <div>
                <a href="#">
                <Image
                src="/assets/images/logo.svg"
                width={150}
                height={150}
                alt="assets circle left"
                />
                </a>
            </div> 
            <div className='w-max'>
                <ul className='grid gap-4 grid-cols-3'>
                    <li 
                    className='inline-block align-bottom text-xl border-b-2 w-max border-[#FED9B7]'
                    >
                        Home
                    </li>
                    <li 
                    className='inline-block align-bottom text-xl border-b-2 w-max border-[#FED9B7]'
                    >
                        My List
                    </li>
                    <li 
                    className=' inline-block align-bottom text-xl border-b-2 w-max border-[#FED9B7]'
                    >
                        About Us 
                    </li>
                </ul>
            </div>
            <div className='bg-white w-48 h-14 flex items-center rounded-l-full'>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <FaUser 
                color="15141F"
                size={30}/>
                </div>
            </div>
        </div>
        
    </div>
    </header>
    </>
  )
}
