// components/SignUpForm.tsx
"use client";

import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FormInput } from './form-components/FormInput';
import { AgeSelector } from './form-components/AgeSelector';
import { validateFormData } from './form-components/ValidateFormData';
import { FormData } from '@/schema/SignUpSchema';

export const SignUpForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        age: 1
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'age' ? Number(value) : value
        }));
    };

    const handleAgeChange = (age: number) => {
        setFormData(prev => ({
            ...prev,
            age
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateFormData(formData);

        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            console.log('Form submitted:', formData);
            // form submission logic
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
                ثبت نام
            </h2>

            <div className="flex flex-col gap-2">
                <FormInput
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="نام"
                    error={errors.firstName}
                    required
                />

                <FormInput
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="نام خانوادگی"
                    error={errors.lastName}
                    required
                />

                <FormInput
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="شماره تلفن"
                    type="tel"
                    error={errors.phoneNumber}
                    required
                />

                <AgeSelector
                    age={formData.age}
                    onChange={handleAgeChange} // Use the new handler
                    error={errors.age}
                />

                <Link href="/login">
                    <p className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                        قبلا حساب کاربری ایجاد کردید؟ از اینجا وارد شوید.
                    </p>
                </Link>
            </div>

            <button
                type="submit"
                className="w-full h-12 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 mt-4 shadow-md hover:shadow-lg dark:shadow-blue-900/50"
            >
                ادامه
            </button>
        </form>
    );
};