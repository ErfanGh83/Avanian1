import { useState } from 'react';
import { FormData } from '@/schema/SignUpSchema';
import { validateFormData } from '@/components/forms/form-components/ValidateFormData';
import { registerUser } from '@/services/authServices';

export const useSignUpForm = () => {
  const [step, setStep] = useState<'info' | 'verification'>('info');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    phoneNumber: '',
    age: 1,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  const handleChange = (name: keyof FormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateCurrentStep = () => {
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const submitUserInfo = async () => {
    if (!validateCurrentStep()) return false;
    
    setIsSubmitting(true);
    try {
      // Map form data to API format
      await registerUser({
        name: formData.firstName,
        phone_number: formData.phoneNumber,
        age: formData.age,
      });
      setStep('verification');
      startCooldown();
      return true;
    } catch (error) {
      setApiError(error instanceof Error ? error.message : 'Registration failed');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const startCooldown = () => {
    setCooldown(180);
    const timer = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) clearInterval(timer);
        return prev - 1;
      });
    }, 1000);
  };

  return {
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
  };
};