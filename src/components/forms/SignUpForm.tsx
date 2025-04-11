"use client"

import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { BiPhone, BiUser } from 'react-icons/bi'
import { GrGroup } from 'react-icons/gr'
import AgeSlider from './form-components/AgeSlider'
import AgePic from './form-components/AgePic'

type FormData = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    age: number;
}

const SignUpForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        age: 1
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            age: Number(e.target.value)
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        // form data:
        console.log('Form submitted:', formData)
        // form submition logic
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full max-w-md flex flex-col gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl'
        >
            <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2'>ثبت نام</h2>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900'>
                    <BiUser size={20} className='mx-3 text-gray-500 dark:text-gray-300' />
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full h-12 px-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100'
                        placeholder='نام'
                        type='text'
                        required
                    />
                </div>

                <div className='flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900'>
                    <GrGroup size={20} className='mx-3 text-gray-500 dark:text-gray-300' />
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full h-12 px-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100'
                        placeholder='نام خانوادگی'
                        type='text'
                        required
                    />
                </div>

                <div className='flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900'>
                    <BiPhone size={20} className='mx-3 text-gray-500 dark:text-gray-300' />
                    <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className='w-full h-12 px-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100'
                        placeholder='شماره تلفن'
                        type='tel'
                        required
                    />
                </div>

                <div
                    className='w-full flex flex-row justify-between items-center'
                >
                    <AgeSlider value={formData.age} onChange={handleAgeChange} />

                    <AgePic age={formData.age} />
                </div>

                <Link href={`/login`}>
                    <p className='text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors'>
                        قبلا حساب کاربری ایجاد کردید؟ از اینجا وارد شوید.
                    </p>
                </Link>
            </div>

            <button
                type='submit'
                className='w-full h-12 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 mt-4 shadow-md hover:shadow-lg dark:shadow-blue-900/50'
            >
                ادامه
            </button>
        </form>
    )
}

export default SignUpForm