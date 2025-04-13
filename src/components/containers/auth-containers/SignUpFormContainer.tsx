import { SignUpForm } from '@/components/forms/SignUpForm'
import AuthSliders from '@/components/sliders/AuthSliders'
import React from 'react'

const SignUpFormContainer = () => {
  return (
    <div
      className="size-full xl:size-4/5 flex flex-row bg-white text-black dark:bg-gray-800 dark:text-white border-2 border-gray-100 dark:border-gray-900 xl:rounded-3xl m-auto xl:shadow-2xl overflow-hidden"
    >
      <div
        className='w-full h-full flex items-center justify-center'
      >
        <SignUpForm />
      </div>

      <div
        className='hide size-0 md:block md:h-full md:w-1/2 bg-gray-400'
      >
        <AuthSliders />
      </div>

    </div>
  )
}

export default SignUpFormContainer