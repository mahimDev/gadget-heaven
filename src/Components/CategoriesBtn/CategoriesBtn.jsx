import { NavLink } from "react-router-dom";

const CategoriesBtn = () => {
    const btn = <>
        <NavLink
            to="/"
            className={`${(isActive) =>
                isActive ? "active bg-slate-600" : "bg-red-200 "
                }  text-xl font-bold py-2 px-8 border rounded-3xl`}
        >
            All Products

        </NavLink>
        <NavLink
            to="/ffff"
            className={`${(isActive) =>
                isActive ? "active bg-slate-600" : "bg-red-200 "
                }  text-xl font-bold py-2 px-8 border rounded-3xl`}
        >
            All h

        </NavLink>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "active bg-slate-600 text-xl font-bold py-2 px-8 border rounded-3xl" : ""
            }
        >

            All Products
        </NavLink>
        <NavLink
            to="/g"
            className={({ isActive }) =>
                isActive ? "active bg-slate-600 text-xl font-bold py-2 px-8 border rounded-3xl" : ""
            }
        >

            All Products
        </NavLink>
    </>
    return (
        <div className="bg-gray-400 p-5 rounded-md flex flex-col h-fit">
            {btn}
        </div>
    );
};

export default CategoriesBtn;