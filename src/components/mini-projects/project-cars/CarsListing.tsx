import { useEffect, useState } from "react"
import { InputField } from "../../generic_components/InputField";
import { LazyList } from "./LazyList";
import {Car} from "./typeCar";

export const CarsListing = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState("");
    const [initialCars, setInitialCars] = useState<Car[]>([]);

    useEffect(() => {
        fetchCars();
    }, [])

    const fetchCars = () => {
        setLoading(true);
        const api = "http://divcommerce.test:8000/api/newcars?page="+page;
        fetch(api)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setLoading(false);
                setPage((prev) => prev + 1);
                setInitialCars((prev) => [...prev, ...data.data.cars.cars]);
            }).catch((error) => {
                console.log(error, 'API Error');
                setError("Something went wrong! Please check console for detailed error.");
                setLoading(false);
            });
    }

    const handleFilteredCars = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
    }

    const filteredCars = initialCars.filter((car) => car.name.toLowerCase().includes(search.toLowerCase()));
    
    return (
        <>
            <div className="p-5">
                <h1 className="font-sans m-5 text-center font-black text-3xl">Cars Listing</h1>
                <div className="w-lg mx-auto m-5">
                    <InputField value={search} inputType={"grayInput"} onChange={handleFilteredCars} />
                </div>
                {loading && <div className="text-xl font-black text-center">Loading...</div>}
                {error && <div className="text-md text-center text-red-500">{error}</div>}
                {!loading && filteredCars.length === 0 
                    ? <div className="text-md text-center">No Cars Found</div>
                    : <LazyList data={filteredCars} apiCallback={fetchCars}/>
                }
            </div>
        </>
    )
}
