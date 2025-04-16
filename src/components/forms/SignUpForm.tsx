"use client";

import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { AgeSelector } from './form-components/AgeSelector';
import { FormData } from '@/schema/SignUpSchema';
import { validateFormData } from './form-components/ValidateFormData';
import { validateField } from './form-components/ValidateField';
import { FormInput } from './form-components/FormInput';
import { motion, AnimatePresence } from 'framer-motion';
import VerificationCodeInput from './form-components/VerificationCodeInput';

export const SignUpForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    phoneNumber: '',
    age: 1
  });
  const [showVerificationCode, setShowVerificationCode] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(true);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const newErrors: Record<string, string> = {};

    Object.keys(touched).forEach((field) => {
      if (touched[field]) {
        const error = validateField(
          field as keyof FormData,
          formData[field as keyof FormData]
        );
        if (error) {
          newErrors[field] = error;
        }
      }
    });

    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value
    }));

    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleAgeChange = (age: number) => {
    setFormData(prev => ({ ...prev, age }));
    setTouched(prev => ({ ...prev, age: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const startCooldown = () => {
    setCooldown(120);
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
    startCooldown();
  };

  const handleBackToPhone = () => {
    setTimeout(() => {
      setShowPhoneInput(true);
    }, 300);
    setTimeout(() => {
      setShowVerificationCode(false);
    }, 300);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);

    setTouched(allTouched);

    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (!showVerificationCode) {
        // First step: validate and show verification code
        setShowPhoneInput(false);
        setTimeout(() => {
          setShowVerificationCode(true);
          startCooldown();
        }, 300);
      } else {
        // Second step: submit form with verification code
        console.log('Form submitted:', formData);
        // form submission logic
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-fit max-w-md flex flex-col gap-2 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
        ثبت نام
      </h2>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode='wait'>
          {showPhoneInput && (
            <>
              <motion.div
                key="firstName"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <FormInput
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="نام"
                  error={errors.firstName}
                  required
                />
              </motion.div>

              <motion.div
                key="phone-input"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FormInput
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="شماره تلفن"
                  type="tel"
                  error={errors.phoneNumber}
                  required
                />
              </motion.div>

              <AgeSelector
                age={formData.age}
                onChange={handleAgeChange}
                error={errors.age}
              />
            </>
          )}
          {showVerificationCode && (
            <motion.div
              key="verification-input"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
        {showVerificationCode ? 'تکمیل ثبت نام' : 'ادامه'}
      </button>
    </form>
  );
};