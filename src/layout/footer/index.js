import Descriptions from '@/components/FooterComponents/Descriptions'
import Foot1 from '@/components/FooterComponents/Foot1'
import Foot2 from '@/components/FooterComponents/Foot2'
import React from 'react'

const Footer = () => {
  return (
    <div className=' 2xl:w-[80%] absolute 2xl:left-[10%] 2xl:right-[10%] flex flex-col bg-white pt-5 items-center '>
     <Foot1 />
     <Foot2 />
     <Descriptions />
    
    <div className='h-[60px] w-full bg-[#181D2D] text-white flex items-center justify-between font-bold px-7 '>
        <h1>23,759 Live Ads | 3,738+ Agents</h1>
        <h1>© 2025 AddressGuru | by: AdxVenture</h1>
    </div>
    </div>
  )
}

export default Footer