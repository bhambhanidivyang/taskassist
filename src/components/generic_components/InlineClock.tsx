import { useEffect, useState } from "react";

export const InlineClock = () => {
    const [now, setNow] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setNow(now.toLocaleDateString() + ' ' + now.toLocaleTimeString());
        },1000);

        return () => clearInterval(interval);
    }, []);

    return <h2 className="font-sans dark:text-white mt-5 mb-5 text-xl m-2 text-center"><span className="p-2 border border-gray-300 rounded-full">Tasks as on: <b>{now}</b></span></h2>
}