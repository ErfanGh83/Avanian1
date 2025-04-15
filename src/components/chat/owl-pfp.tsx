import Image from 'next/image'
import React from 'react'

const OwlPfp = () => {
  return (
    <div
        className='size-16 rounded-full flex items-center justify-center bg-gray-300'
    >
        <Image 
            src={`/images/owlpfp.jpg`}
            alt='owlpfp'
            width={20}
            height={20}
        />
    </div>
  )
}

export default OwlPfp