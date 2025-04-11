import SignUpForm from '@/components/forms/SignUpForm'
import AuthSliders from '@/components/sliders/AuthSliders'
import React from 'react'

const LoginFormContainer = () => {
  return (
    <div
      className="size-4/5 flex flex-row bg-white text-black dark:bg-gray-800 dark:text-white border-2 border-gray-100 dark:border-gray-900 rounded-3xl m-auto shadow-2xl overflow-hidden"
    >
      <div
        className='w-1/2 h-full flex items-center justify-center'
      >
        <SignUpForm />
      </div>

      <div
        className='w-1/2 bg-gray-400'
      >
        <AuthSliders />
      </div>

    </div>
  )
}

export default LoginFormContainer