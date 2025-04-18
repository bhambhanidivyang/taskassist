import { useRef } from "react";
import { ListingCard } from "../../generic_components/ListingCard"
import {Car} from "./typeCar";

type LazyListProps = {
    data: Car[]; // Expecting an array of objects
    apiCallback: () => void // pass callback for api request and state update
};

/**
 * 
 * @param LazyListProps 
 * @returns LazyList
 * How to use: <LazyList data={filteredCars} apiCallback={fetchCars}/>
 */

export const LazyList: React.FC<LazyListProps> = ({data, apiCallback}) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastCarRef = (node: HTMLDivElement | null) => {
        // if (loading) return;
        if (observer.current) observer.current.disconnect(); // Clean up previous observer
    
        observer.current = new IntersectionObserver((entries) => {
            console.log(entries,61);
            if (entries[0].isIntersecting) { // Check if last item is visible
                apiCallback(); // Load next page
            }
        }, {
            rootMargin: "0px", threshold: 0
        });
    
        if (node) observer.current.observe(node); // Attach observer to last item
    };
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 p-5">
            {  
                data.map((car, index) => (
                    <ListingCard car={car} key={index} index={index} data={data} lastCarRef={lastCarRef} />
                ))
            }
            </div>
        </>
    )
}