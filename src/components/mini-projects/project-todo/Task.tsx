import { useEffect, useRef, useState } from "react";
import { IconButton } from "../../generic_components/IconButton";

interface TaskProps {
    task: {name: string; completed: boolean};
    index: number;
    onDelete: (index: number) => void,
    onComplete: (index: number) => void,
    onEdit: (index: number, newName: string) => void
}
export const Task = ({task, index, onDelete, onComplete, onEdit}: TaskProps) => {
    const [input, setInput] = useState(task ? task.name : '');
    const inputRef = useRef<HTMLInputElement>(null);
    const [editable, setEditable] = useState(false);
    const editableStyle = editable ? "focus:bg-gray-200 focus:dark:bg-gray-800 focus:outline-none focus:border-blue-400 p-2" : "readonly caret-transparent focus:outline-none focus:ring-0";

     // Focus input when entering edit mode
     useEffect(() => {
        if (editable) {
            inputRef.current?.focus();
        }
    }, [editable]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const handleEdit = () => {
        if (editable) {
            onEdit(index, input);
        }
        setEditable(!editable);
    }
    return (
        <>
            <div className="grid grid-cols-12 p-2 items-center border border-purple-300 dark:border-purple-700 rounded-lg">
                <input ref={inputRef} onChange={handleChange} className={`col-span-9 ${editableStyle} dark:text-white ${task.completed ? 'line-through text-gray-500' : ''}`} type="text" value={input} />
                <div className="col-span-3 text-right">
                    <IconButton color="teal" cb={onComplete} index={index} text="✓" type="button"/>
                    <IconButton color="red" cb={onDelete} index={index} text="✘" type="button"/>
                    <IconButton color="purple" cb={handleEdit} index={index} text={editable ? "💾" : "✎"} type="button"/>
                </div>
            </div>
        </>
    )
}