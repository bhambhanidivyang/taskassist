import {forwardRef} from 'react'

interface InputProps {
    placeholder?: string;
    arialabel?: string;
    value: string | number;
    inputType: "transparentInput" | "regularInput" | "grayInput";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const inputVariants = {
    transparentInput: "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:placeholder-gray-500 dark:text-white",
    regularInput: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    grayInput: "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
}

export const InputField = forwardRef<HTMLInputElement, InputProps>(({placeholder, arialabel, value, inputType, onChange}: InputProps, ref) => {
    return <input 
                ref={ref || null} 
                onChange={onChange} 
                value={value}
                className={`${inputVariants[inputType]}`}
                type="text" 
                placeholder={placeholder || "Enter text here"} 
                aria-label={arialabel || "text input field"} 
                autoComplete='off' />
});

/*
------------------------------------------------------------------------------
DOCUMENTATION
------------------------------------------------------------------------------

Handler:
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (error && e.target.value.trim() !== '') {
        setError(false);
    }
}

Component:
<InputField inputType="transparentInput" ref={ref} value={inputValue} onChange={handleChange} placeholder="Enter Task Information" arialabel="Task Information" />
*/