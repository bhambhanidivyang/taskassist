import {Car} from "../mini-projects/project-cars/typeCar";
type ListingCardProps = {
    car: Car; // Expecting Car
    index: number;
    data: Car[];
    lastCarRef?: (node: HTMLDivElement | null) => void
};
export const ListingCard: React.FC<ListingCardProps> = ({ car, index, data, lastCarRef }) => {
    return (
        <>
            <div ref={index === data.length - 1 ? lastCarRef : null} className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                <img className="w-full" src={car.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="mb-2">
                        <span className="font-bold font-sans">{car.rating}</span> 
                        <span className="text-orange-400 text-xl"> ✯</span> 
                        <span className="text-xs text-gray-400"> {car.ratingDesc}</span>
                    </div>
                    <div className="font-bold text-md mb-2">{car.name}</div>
                    <p className="text-gray-700 font-semibold text-xl text-base">₹{car.priceRange}</p>
                    <p className="text-gray-500 text-xs">*Ex-Showroom Price in New Delhi</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{car.mileage}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{car.engine}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{car.seating}</span>
                </div>
            </div>
        </>
    )
}