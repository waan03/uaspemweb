import React from 'react'
import { FaUser } from "react-icons/fa";
import Image from "next/image";

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'My List', href: '/myList', current: false },
    { name: 'About Us', href: '/aboutUs', current: false },
  ]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export function navbar() {


  return (
    <>
    <header className="sticky top-0 z-30 w-full p-0 shadow drop-shadow flex ">
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
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'border-b-4 p-2 border-[#fdb714]'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        
                      )}
                      current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                    
                  ))}
                </div>
            </div>
            <div className='bg-white w-64 h-14 py-8 flex items-center rounded-l-full'>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <FaUser 
                color="15141F"
                size={30}/>
                </div>
                <div className='pl-2 py-0'>
                    <p className='text-[#15141F] font-bold'>
                        USER
                    </p>
                    <p className='text-[#15141F]'>
                        ??
                    </p>
                </div>
            </div>
        </div>
        
    </div>
    </header>
    </>
  )
}
