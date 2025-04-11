// components/AgeSelector.tsx
import AgeSlider from './AgeSlider';
import AgePic from './AgePic';

type AgeSelectorProps = {
    age: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};

export const AgeSelector = ({ age, onChange, error }: AgeSelectorProps) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex flex-row justify-between items-center">
                <AgeSlider value={age} onChange={onChange} />
                <AgePic age={age} />
            </div>
            <div className="h-4">
                {error && <p className="text-red-500 text-sm text-right">{error}</p>}
            </div>
        </div>
    );
};