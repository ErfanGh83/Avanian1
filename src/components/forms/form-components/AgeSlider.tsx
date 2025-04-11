import { ChangeEvent } from "react";
import { GiAges } from "react-icons/gi";

type props = {
    value: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AgeSlider = ({ value, onChange }: props) => {

    return (
        <div className="w-full px-2 py-2">
            <div className="flex flex-row gap-2 items-center mb-2">
                <GiAges size={20} className="text-gray-500 dark:text-gray-300" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">سن:  {value}</span>
            </div>
            <input
                type="range"
                min="1"
                max="120"
                value={value}
                onChange={onChange}
                className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500 dark:accent-blue-400"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span>1</span>
                <span>120</span>
            </div>
        </div>
    )
}

export default AgeSlider;