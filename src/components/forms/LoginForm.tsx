import Link from 'next/link'
import React from 'react'
import { BiPhone } from 'react-icons/bi'

const LoginForm = () => {
  return (
    <form className='w-full max-w-md flex flex-col gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl'>
      <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2'>ورود</h2>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900'>
          <BiPhone size={20} className='mx-3 text-gray-500 dark:text-gray-300' />
          <input
            className='w-full h-12 pl-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100'
            placeholder='شماره تلفن'
            type='tel'
          />
        </div>

        <Link href={`/sign-up`}>
          <p className='text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'>حساب کاربری ندارید ؟ از اینجا می توانید ایجاد کنید.</p>
        </Link>
      </div>

      <button
        type='submit'
        className='w-full h-12 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 mt-4 shadow-md hover:shadow-lg dark:shadow-blue-900/50'
      >
        ارسال کد
      </button>
    </form>
  )
}

export default LoginForm