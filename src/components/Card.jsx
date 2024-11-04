import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const Card = ({ coffee, handleRemove }) => {
    const { pathname } = useLocation();
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};

    return (
        <div className="flex relative ">
            <Link to={`/coffee/${id}`}
                className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <figure className="w-full h-48 overflow-hidden">
                    <img src={image} className="" alt="" />
                </figure>
                <div className="p-4">
                    <h1 className="text-xl">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
            {
                pathname === '/dashboard' && (
                    <div onClick={()=>handleRemove(id)} className="absolute p-3 bg-warning cursor-pointer rounded-full -top-5 -right-5">
                        <FaTrash size={18}/>
                    </div>
                )
            }
        </div>
    );
};

export default Card;