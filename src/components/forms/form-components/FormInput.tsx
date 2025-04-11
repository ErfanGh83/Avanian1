import { BiUser, BiPhone } from 'react-icons/bi';
import { GrGroup } from 'react-icons/gr';

type FormInputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
  error?: string;
  required?: boolean;
};

export const FormInput = ({
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  icon,
  error,
  required = false,
}: FormInputProps) => {
  const IconComponent = () => {
    if (name === 'phoneNumber') return <BiPhone size={20} className="mx-3 text-gray-500 dark:text-gray-300" />;
    if (name === 'lastName') return <GrGroup size={20} className="mx-3 text-gray-500 dark:text-gray-300" />;
    return <BiUser size={20} className="mx-3 text-gray-500 dark:text-gray-300" />;
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900">
        {icon || <IconComponent />}
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-12 px-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100"
          placeholder={placeholder}
          type={type}
          required={required}
        />
      </div>
      <div className="h-4">
        {error && <p className="text-red-500 text-sm text-right">{error}</p>}
      </div>
    </div>
  );
};