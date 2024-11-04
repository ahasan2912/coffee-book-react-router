import { useEffect, useState } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
import { getAllFovorites, removeFavorite } from "../Utilities";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFovorites();
        setCoffees(favorites);
    }, []);

    const handleRemove = (id) =>{
        removeFavorite(id);
        const favorites = getAllFovorites();
        setCoffees(favorites);
    }

    return (
        <div>
            <Heading
                title={'Welcome to Deahboard'}
                subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}>
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee} handleRemove={handleRemove}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;