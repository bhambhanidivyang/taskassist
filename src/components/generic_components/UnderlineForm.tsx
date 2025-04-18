import { FormButton } from "./FormButton";
import { InputField } from "./InputField";
import { forwardRef } from 'react';

interface UnderlineFormProps {
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
    error: boolean;
}

export const UnderlineForm = forwardRef<HTMLInputElement, UnderlineFormProps>(({inputValue, handleChange, handleSubmit, error}, ref) => {
    return (
        <>
            <div className='flex justify-center items-center m-5'>
                <div className="w-full max-w-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center border-b border-purple-500 py-2">
                            <InputField inputType="transparentInput" ref={ref} value={inputValue} onChange={handleChange} placeholder="Enter Task Information" arialabel="Task Information" />
                            <FormButton color="teal" text="Add Task" type="submit"/>
                        </div>
                        {error && <div className="text-red-500 font-mono text-xs">This is a mandatory field</div>}
                    </form>
                </div>
            </div>
        </>
    )
})