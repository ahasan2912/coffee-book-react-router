import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const data = useLoaderData();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(coffee => coffee.category === category);
            setCoffees(filterByCategory);
        }
        else {
            setCoffees(data.slice(0, 6));
        }
    }, [category, data]);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button onClick={()=>navigate('/coffees')} className="btn btn-warning mt-2">View All</button>
          {/*   <button onClick={()=>setCoffees(data)} className="btn btn-warning mt-2">View All</button> */}
        </div>
    );
};

export default CoffeeCard;