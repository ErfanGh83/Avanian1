"use client"

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React from 'react'
import { BiMoon } from 'react-icons/bi'

const DarkButton = () => {

    //a hook which manages themes
    const { setTheme, resolvedTheme } = useTheme()

    //currently in dark mode so no dark button needed
    if (resolvedTheme === 'light') {
        return (<div></div>)
    }

    return (
        <motion.button
            className='size-8 flex items-center justify-center rounded-full bg-black shadow-xl hover:rotate-12 transition-all'
            onClick={() => setTheme('light')}
            initial={{opacity: 0, x: 45}}
            animate={{opacity: 1, x: 0}}
            transition={{ 
                duration: 0.1,
                delay: 0,
                ease: "easeOut"
            }}
        >
            <BiMoon size={24} color='white' />
        </motion.button>
    )
}

export default DarkButton;