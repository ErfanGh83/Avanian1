import { motion } from 'framer-motion';
import VerificationCodeInput from '../forms/form-components/VerificationCodeInput';

interface VerificationStepProps {
  cooldown: number;
  onBack: () => void;
  onResendCode: () => void;
}

export const VerificationStep = ({
  cooldown,
  onBack,
  onResendCode,
}: VerificationStepProps) => (
  <motion.div
    key="verification-step"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <VerificationCodeInput
      onBack={onBack}
      onResendCode={onResendCode}
      cooldown={cooldown}
    />
  </motion.div>
);