import { useEffect, useState } from "react"
import { InputField } from "../../generic_components/InputField"
import { FormButton } from "../../generic_components/FormButton";
import { Toggle } from "../../generic_components/Toggle";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [error, setError] = useState(false);
    const [toggleDarkMode, setToggleDarkMode] = useState(false)
    const [userHistory, setUserHistory] = useState<String[]>([]);

    useEffect(() => {
            document.documentElement.classList.remove("light", "dark");
            if (toggleDarkMode === true) {
                document.documentElement.classList.add("dark");
            }
        }, [toggleDarkMode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep(Number(e.target.value));
        if (error && e.target.value.trim() !== '') {
            setError(false);
        }
    }

    const handleIncrement = () => {
        if (step === 0) {
            setError(true);
            return;
        }
        setCount((prev) => {
            const updatedCount = prev + step;
            setUserHistory((prev) => [...prev, `Operation: Increment | Step: ${step} | Count: ${updatedCount}`]);
            return updatedCount;
        });
    }

    const handleDecrement = () => {
        setCount((prev) => {
            const updatedCount = Math.max(0, (prev - step));
            setUserHistory((prev) => [...prev, `Operation: Decrement | Step: ${step} | Count: ${updatedCount}`]);
            return updatedCount;
        });
    }

    const handleReset = () => {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-full py-15">
                    <Toggle text="Dark Mode" size="sm" toggle={toggleDarkMode} setToggle={setToggleDarkMode} />
                    <div className="w-full max-w-md mx-auto px-10 py-10 rounded-xl border border-gray-200 shadow dark:border-white">
                        <div className="md:flex md:items-center mb-6">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 dark:text-teal-500">Count</label>
                            <span className="dark:text-white">{count}</span>
                        </div>
                        <div className="md:flex md:items-center mb-6 relative gap-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 dark:text-teal-500">Step</label>
                            <div className="w-full relative">
                                <InputField inputType="grayInput" value={step} onChange={handleChange} placeholder="Enter Task Information" arialabel="Task Information" />
                                {error && <div className="absolute left-0 text-red-500 text-xs mt-1">Required value. Step value should be between 1 and 100. </div>}
                            </div>
                        </div>
                        <div className="flex space-x-4 justify-center">
                            <FormButton color="teal" text="Increment" cb={handleIncrement} type="button"/>
                            <FormButton color="teal" text="Decrement" cb={handleDecrement} type="button"/>
                            <FormButton color="teal" text="Clear All" cb={handleReset} type="button"/>
                        </div>
                    </div>
                    {
                        userHistory.length > 0 &&
                        <div className="p-5 w-full text-center dark:text-white">
                            <h2 className="text-lg font-black underline mb-2">Counter Usage History</h2>
                            <ul>
                                {userHistory.map((historyRecord, index) => <li key={index}>{historyRecord}</li>)}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}