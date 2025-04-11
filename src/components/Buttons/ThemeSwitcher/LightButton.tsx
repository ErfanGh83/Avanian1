"use client"

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React from 'react'
import { BiSun } from 'react-icons/bi'

const LightButton = () => {

    //a hook which manages themes
    const { setTheme, resolvedTheme } = useTheme()

    //currently in light mode so no light button needed
    if (resolvedTheme === 'dark') {
        return (<div></div>)
    }

    return (
        <motion.button
            className='size-8 flex items-center justify-center rounded-full shadow-xl bg-white hover:rotate-12 transition-all'
            onClick={() => setTheme('dark')}
            initial={{opacity: 0, x: -45}}
            animate={{opacity: 1, x: 0}}
            transition={{ 
                duration: 0.1,
                delay: 0,
                ease: "easeOut"
            }}
        >
            <BiSun size={24} color='black' />
        </motion.button>
    )
}

export default LightButton;