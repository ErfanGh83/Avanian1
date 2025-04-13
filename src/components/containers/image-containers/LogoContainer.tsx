import React from 'react'
import Image from 'next/image'

const LogoContainer = () => {
    return (
        <div
            className='size-fit'
        >
            <Image
                src={"/images/logo.png"}
                alt={"logo"}
                className="object-cover"
                width={100}
                height={80}
                quality={100}
            />
        </div>
    )
}

export default LogoContainer