import { useState, useRef, useEffect } from "react";
import { UnderlineForm } from "../generic_components/UnderlineForm";
import { TaskList } from "./TaskList";
import { Toggle } from "../generic_components/Toggle";
import { InlineClock } from "../generic_components/InlineClock";
import { AppHeading } from "../AppHeading";

export const TaskHome = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [toggleDarkMode, setToggleDarkMode] = useState(false)
    const [tasklist, setTasklist] = useState<{name: string; completed: boolean}[]>(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        if (toggleDarkMode === true) {
            document.documentElement.classList.add("dark");
        }
    }, [toggleDarkMode]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasklist));
    }, [tasklist]);

    // track input field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (error && e.target.value.trim() !== '') {
            setError(false);
        }
    }

    // add task
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setError(true);
            if (inputRef.current)
                inputRef.current.focus();
            return;
        }

        setTasklist((prevState) => ([...prevState, {name: inputValue, completed: false}]));
        setInputValue('');
        if (inputRef.current)
            inputRef.current.focus();

    }

    // delete task
    const handleDelete = (index: number) => {
        setTasklist((prevState) => prevState.filter((_,i) => i !== index));
        if (inputRef.current)
            inputRef.current.focus();
    }

    const handleComplete = (index: number) => {
        setTasklist((prevState) => (prevState.map((task, i) => i===index ? {...task, completed: !task.completed} : task)));
    }

    const handleEdit = (index: number, newName: string) => {
        console.log('In Edit');
        setTasklist((prevState) => prevState.map((task, i) => i === index ? {...task, name: newName}: task))
    }

    const handleClearAllTasks = () => {
        setTasklist([]);
    }

    return (
        <>
            <div className="container mx-auto">
                <AppHeading />
                <InlineClock />
                <Toggle toggle={toggleDarkMode} setToggle={setToggleDarkMode} text="Dark Mode" size="sm" />
                <UnderlineForm ref={inputRef} error={error} inputValue={inputValue} handleSubmit={handleSubmit} handleChange={handleChange} />
                <TaskList tasks={tasklist} onDelete={handleDelete} onComplete={handleComplete} onEdit={handleEdit} />
                <button onClick={handleClearAllTasks} className="bg-red-500 mx-auto flex text-white p-4 rounded-xl border-red-800 text-center cursor-pointer" type="button">Clear All Tasks</button>
            </div>
        </>
    )
}