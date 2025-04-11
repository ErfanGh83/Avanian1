import ThemeSwitchButton from '@/components/buttons/ThemeSwitcher/ThemeSwitchButton'
import React from 'react'


const Header = () => {
  return (
    <div
        className='w-full h-16 absolute top-0 left-0 flex flex-row items-center justify-between px-2'
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