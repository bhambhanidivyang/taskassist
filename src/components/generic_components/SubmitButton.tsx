interface ButtonProps {
    text: string;
    color: string;
    type?: "submit" | "reset" | "button";
}

export const SubmitButton = ({text, color, type}: ButtonProps) => {
    let buttonStyle = `bg-${color}-500 hover:bg-${color}-700 border-${color}-500 hover:border-${color}-700`
    return <button type={type} className={`${buttonStyle} flex-shrink-0 text-sm border-4 text-white py-1 px-2 rounded cursor-pointer`}>{text}</button>
}