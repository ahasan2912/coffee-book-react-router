import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(category =>
                    <NavLink
                        to={`/category/${category.category}`}
                        role="tab"
                        className={({isActive}) => `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`}
                        key={category.category}>
                        {category.category}
                    </NavLink>)
            }
        </div>
    );
};

export default Categories;