import React from 'react'
import { BiMoon } from 'react-icons/bi'

const DarkButton = () => {
  return (
    <button
        className='size-8 flex items-center justify-center rounded-full bg-black shadow-xl hover:rotate-[45]'
    >
        <BiMoon size={24} color='white'/>
    </button>
  )
}

export default DarkButton;