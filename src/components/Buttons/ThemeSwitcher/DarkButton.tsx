"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import { BiMoon } from 'react-icons/bi'

const DarkButton = () => {

    const { setTheme, resolvedTheme } = useTheme()

    //currently in dark mode so no dark button needed
    if (resolvedTheme === 'dark') {
        return (<div></div>)
    }

    return (
        <button
            className='size-8 flex items-center justify-center rounded-full bg-black shadow-xl hover:rotate-[45]'
            onClick={() => setTheme('dark')}
        >
            <BiMoon size={24} color='white' />
        </button>
    )
}

export default DarkButton;