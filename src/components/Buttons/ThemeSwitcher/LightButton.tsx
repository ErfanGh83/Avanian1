import React from 'react'
import { BiSun } from 'react-icons/bi'

const LightButton = () => {
  return (
    <button
        className='size-8 flex items-center justify-center rounded-full shadow-xl bg-white'
    >
        <BiSun size={24} color='black'/>
    </button>
  )
}

export default LightButton;