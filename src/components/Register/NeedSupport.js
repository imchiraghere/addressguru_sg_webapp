import React from 'react'
import Image from 'next/image'

const NeedSupport = () => {
  return (
    <div className='bg-[#FFFAF6] w-xs max-h-[400px] h-[40%] rounded-4xl px-5 py-10'>
        <Image src="/assets/register/support-illustrator.png" alt="illustrator" height={500} width={500}  className='h-[220px] w-[90%] mx-2 '/>
        <h4 className='font-semibold text-2xl text-center my-3'>Not finding the help you need?</h4>
        <button className='w-60 ml-4 hover:bg-blue-500 transition-transform ease hover:scale-105 text-center bg-blue-600 text-white font-semibold p-2 cursor-pointer rounded-md'>Need Support</button>

    </div>
  )
}

export default NeedSupport