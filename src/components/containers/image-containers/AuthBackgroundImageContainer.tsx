"use client"

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const AuthBackgroundImageContainer = () => {

    const { resolvedTheme } = useTheme()

    if (resolvedTheme === "dark") {
        return (
            <div
                className='size-full'
            >
                <Image
                    src={"/images/auth-dark-bg.jpg"}
                    alt={"logo"}
                    className=""
                    fill
                    quality={100}
                />
            </div>
        )
    }
    else {
        return (
            <div
                className='size-full'
            >
                <Image
                    src={"/images/auth-light-bg.jpg"}
                    alt={"logo"}
                    className=""
                    fill
                    quality={100}
                />
            </div>
        )
    }

}

export default AuthBackgroundImageContainer