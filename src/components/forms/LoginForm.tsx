"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiPhone } from 'react-icons/bi'
import VerificationCodeInput from './form-components/VerificationCodeInput'
import { motion, AnimatePresence } from 'framer-motion'

const LoginForm = () => {
  const [showVerificationCode, setShowVerificationCode] = useState(false)
  const [cooldown, setCooldown] = useState(0)
  const [showPhoneInput, setShowPhoneInput] = useState(true)

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showVerificationCode) {
      setShowPhoneInput(false)
      setTimeout(() => {
        setShowVerificationCode(true)
        startCooldown()
      }, 300) // Match this with exit animation duration
    } else {
      // Handle form submission with verification code
      console.log('Submit form with verification code')
    }
  }

  const handleBackToPhone = () => {
    setTimeout(() => {
      setShowPhoneInput(true)
    }, 300)
    setTimeout(() => {
      setShowVerificationCode(false)
    }, 100)
  }

  const startCooldown = () => {
    setCooldown(120)
  }

  const handleResendCode = () => {
    // Logic to resend code
    console.log('Resending verification code...')
    startCooldown()
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [cooldown])

  return (
    <form onSubmit={handleSendCode} className='w-full max-w-md flex flex-col gap-2 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl'>
      <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2'>ورود</h2>

      <div className='h-36 flex flex-col justify-between'>

        <div
          className='h-24 w-full flex items-center justify-center'
        >
          <AnimatePresence mode='wait'>
            {showPhoneInput && (
              <motion.div
                key="phone-input"
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900'
              >
                <BiPhone size={20} className='mx-3 text-gray-500 dark:text-gray-300' />
                <input
                  className='w-full h-12 pl-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100'
                  placeholder='شماره تلفن'
                  type='tel'
                  required
                />
              </motion.div>
            )}

            {showVerificationCode && (
              <motion.div
                key="verification-input"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                <VerificationCodeInput
                  onBack={handleBackToPhone}
                  onResendCode={handleResendCode}
                  cooldown={cooldown}
                  resetCooldown={() => setCooldown(0)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href={`/sign-up`}>
          <p className='text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'>حساب کاربری ندارید ؟ از اینجا می توانید ایجاد کنید.</p>
        </Link>
      </div>

      <button
        type='submit'
        className='w-full h-12 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 mt-4 shadow-md hover:shadow-lg dark:shadow-blue-900/50'
      >
        {showVerificationCode ? 'تأیید و ورود' : 'ارسال کد'}
      </button>
    </form>
  )
}

export default LoginForm