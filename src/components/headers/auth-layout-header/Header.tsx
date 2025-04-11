import ThemeSwitchButton from '@/components/Buttons/ThemeSwitcher/ThemeSwitchButton'
import React from 'react'


const Header = () => {
  return (
    <div
        className='w-full h-36 flex flex-row items-center justify-between px-2'
    >
        <div>
            {/* <p>left side of the header</p> */}
        </div>

        <div
            className=''
        >
            <ThemeSwitchButton />
        </div>
    </div>
  )
}

export default Header