"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import { BiSun } from 'react-icons/bi'

const LightButton = () => {

    const { setTheme, resolvedTheme } = useTheme()

    //currently in light mode so no light button needed
    if (resolvedTheme === 'light') {
        return (<div></div>)
    }

    return (
        <button
            className='size-8 flex items-center justify-center rounded-full shadow-xl bg-white'
            onClick={() => setTheme('light')}
        >
            <BiSun size={24} color='black' />
        </button>
    )
}

export default LightButton;