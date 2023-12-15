import React from 'react'

const Footer = () => {
  return (
    <div className='relative'>
        <div className='static bottom-0 left-0'>
            <div className='bg-[#15141F] w-full px-32 h-auto '>
                <div className='py-10'>
                    <Image
                    src="/assets/images/logo.svg"
                    width={150}
                    height={150}
                    alt="assets circle left"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer