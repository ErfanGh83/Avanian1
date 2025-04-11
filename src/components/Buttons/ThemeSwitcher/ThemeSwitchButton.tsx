import React from 'react'
import DarkButton from './DarkButton'
import LightButton from './LightButton'

const ThemeSwitchButton = () => {
  return (
    <div
        className='w-24 h-12 flex flex-row items-center justify-between rounded-full px-2 py-1 shadow-inner bg-gray-500'
    >
        <DarkButton />
        <LightButton />
    </div>
  )
}

export default ThemeSwitchButton