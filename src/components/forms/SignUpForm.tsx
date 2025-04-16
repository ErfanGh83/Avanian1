'use client';

import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { useSignUpForm } from '@/hooks/useSignUpForm';
import { InfoStep } from '../signup/InfoStep';
import { VerificationStep } from '../signup/VerificationStep';

export const SignUpForm = () => {
  const {
    step,
    formData,
    errors,
    isSubmitting,
    apiError,
    cooldown,
    handleChange,
    submitUserInfo,
    setStep,
    startCooldown,
  } = useSignUpForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'info') {
      await submitUserInfo();
    } else {
      // Handle verification submission
      console.log('Submitting verification code...');
    }
  };

  const handleBackToPhone = () => {
    setStep('info');
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
    startCooldown();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-fit max-w-md flex flex-col gap-2 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">
        ثبت نام
      </h2>

      {apiError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {apiError}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          {step === 'info' ? (
            <InfoStep
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />
          ) : (
            <VerificationStep
              cooldown={cooldown}
              onBack={handleBackToPhone}
              onResendCode={handleResendCode}
            />
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
        disabled={isSubmitting}
      >
        {isSubmitting
          ? 'در حال ارسال...'
          : step === 'verification'
          ? 'تکمیل ثبت نام'
          : 'ادامه'}
      </button>
    </form>
  );
};