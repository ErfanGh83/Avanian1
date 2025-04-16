import { motion } from 'framer-motion';
import { AgeSelector } from '../forms/form-components/AgeSelector';
import { FormInput } from '../forms/form-components/FormInput';
import { FormData } from '@/schema/SignUpSchema';

interface InfoStepProps {
  formData: {
    firstName: string;
    phoneNumber: string;
    age: number;
  };
  errors: Record<string, string>;
  onChange: (name: keyof FormData, value: string | number) => void
}

export const InfoStep = ({ formData, errors, onChange }: InfoStepProps) => (
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
        onChange={(e) => onChange('firstName', e.target.value)}
        placeholder="نام"
        error={errors.firstName}
        required
      />
    </motion.div>

    <motion.div
      key="phoneNumber"
      initial={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FormInput
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={(e) => onChange('phoneNumber', e.target.value)}
        placeholder="شماره تلفن"
        type="tel"
        error={errors.phoneNumber}
        required
      />
    </motion.div>

    <AgeSelector
      age={formData.age}
      onChange={(age) => onChange('age', age)}
      error={errors.age}
    />
  </>
);