import React from 'react'
import { BiPhone, BiUser } from 'react-icons/bi'
import { GrGroup } from 'react-icons/gr'

const LoginForm = () => {
  return (
    <form className='w-full max-w-md flex flex-col gap-6 p-6 bg-white rounded-xl shadow-lg rtl'>
      <h2 className='text-2xl font-bold text-center text-gray-800 mb-2'>ورود</h2>
      
      <div className='space-y-4'>
        <div className='flex flex-row items-center border-2 border-gray-200 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200'>
          <BiUser size={20} className='mr-3 text-gray-500' />
          <input
            className='w-full h-12 px-3 text-lg border-none focus:outline-none placeholder-gray-400 text-right'
            placeholder='نام'
            type='text'
          />
        </div>

        <div className='flex flex-row items-center border-2 border-gray-200 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200'>
          <GrGroup size={20} className='mr-3 text-gray-500' />
          <input
            className='w-full h-12 px-3 text-lg border-none focus:outline-none placeholder-gray-400 text-right'
            placeholder='نام خانوادگی'
            type='text'
          />
        </div>

        <div className='flex flex-row items-center border-2 border-gray-200 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200'>
          <BiPhone size={20} className='mr-3 text-gray-500' />
          <input
            className='w-full h-12 px-3 text-lg border-none focus:outline-none placeholder-gray-400 text-right'
            placeholder='شماره تلفن'
            type='tel'
          />
        </div>
      </div>

      <button
        type='submit'
        className='w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 mt-4'
      >
        ادامه
      </button>
    </form>
  )
}

export default LoginForm