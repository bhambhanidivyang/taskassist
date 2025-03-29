import {forwardRef} from 'react'

interface InputProps {
    placeholder: string;
    arialabel: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField = forwardRef<HTMLInputElement, InputProps>(({placeholder, arialabel, value, onChange}: InputProps, ref) => {
    return <input ref={ref} onChange={onChange} value={value} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:placeholder-gray-500 dark:text-white" type="text" placeholder={placeholder} aria-label={arialabel} autoComplete='off' />
});