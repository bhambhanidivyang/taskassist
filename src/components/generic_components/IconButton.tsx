interface ButtonProps {
    text: string;
    color: "red" | "teal" | "green" | "purple";
    index: number;
    type?: "submit" | "reset" | "button";
    cb: (index: number) => void
}

export const IconButton = ({text, color, index, type, cb}: ButtonProps) => {
    const colorVariants = {
        red: "bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700",
        teal: "bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700",
        green: "bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700",
        purple: "bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700"
    };
    return <button type={type} className={`${colorVariants[color]} w-9 text-sm border-4 text-white py-1 px-1 mr-1 rounded-full cursor-pointer`} onClick={() => cb(index)}>{text}</button>
}