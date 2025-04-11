import AgeSlider from './AgeSlider';
import AgePic from './AgePic';

type AgeSelectorProps = {
  age: number;
  onChange: (value: number) => void;
  error?: string;
};

export const AgeSelector = ({ age, onChange, error }: AgeSelectorProps) => {
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="w-full flex flex-row justify-between items-center">
        <AgeSlider value={age} onChange={handleAgeChange} />
        <AgePic age={age} />
      </div>
      <div className="h-4">
        {error && <p className="text-red-500 text-sm text-right">{error}</p>}
      </div>
    </div>
  );
};