import React from 'react'
import Image from 'next/image'

const SliderCard = () => {
  return (
    <div className='w-full h-full bg-gray-100 rounded-lg'>

        <Image src="/assets/SeeDetails/slider-img.png" alt='business image' height={1000} width={1000} className='h-full w-full rounded-lg  p-1' />

    </div>
  )
}

export default SliderCard