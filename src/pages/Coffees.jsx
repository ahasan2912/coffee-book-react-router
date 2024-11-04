import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import sortBy from "sort-by";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy)=>{
        if(sortBy==='popularity'){
            const sorted = [...data].sort((a, b)=> b.popularity - a.popularity);
            setCoffees(sorted);
        }
        else if(sortBy==='rating'){
            const sorted = [...data].sort((a, b)=> b.rating - a.rating);
            setCoffees(sorted);
        }
    }
    return (
        <div>
            <div className="flex justify-between items-center my-12">
                <div>
                    <h1 className="text-3xl font-bold text-gray-600">Sort Coffee&apos;s by Popularity & Ratings&gt; </h1>
                </div>
                <div className="space-x-2">
                    <button onClick={()=>handleSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
                    <button onClick={()=>handleSort('rating')} className="btn btn-warning">Sort By Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;