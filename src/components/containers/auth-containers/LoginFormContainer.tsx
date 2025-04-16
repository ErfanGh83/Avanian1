// import ThemeSwitchButton from '@/components/Buttons/ThemeSwitcher/ThemeSwitchButton'
import LoginForm from '@/components/forms/LoginForm'
import AuthSliders from '@/components/sliders/AuthSliders'
import React from 'react'
import LogoContainer from '../image-containers/LogoContainer'
import Link from 'next/link'

const LoginFormContainer = () => {
  return (
    <div
      className="size-full xl:size-11/12 xl:max-w-[1420px] xl:max-h-[900px] flex flex-row bg-white dark:bg-gray-800 text-black  dark:text-white border-2 border-gray-100 dark:border-gray-900 xl:rounded-3xl m-auto xl:shadow-2xl overflow-hidden"
    >
      <div
        className='w-full h-full flex flex-col items-center justify-center relative'
      >
        <div
          className='absolute z-10 top-[1%] right-[3%]'
        >
          <Link href={`/`}>
            <p className='size-fit text-blue-500 dark:text-blue-400 transition-all hover:text-blue-600 dark:hover:text-blue-300'>بازگشت به خانه</p>
          </Link>
        </div>
        {/* <div
          className='absolute z-10 top-[1%] left-[2%]'
        >
          <ThemeSwitchButton />
        </div> */}
        <LogoContainer />
        <LoginForm />
      </div>

      <div
        className='hide size-0 md:block md:h-full md:w-1/2 bg-gray-400'
      >
        <AuthSliders />
      </div>

    </div>
  )
}

export default LoginFormContainer