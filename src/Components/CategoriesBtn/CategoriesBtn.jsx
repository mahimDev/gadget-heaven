import { NavLink } from "react-router-dom";

const CategoriesBtn = () => {
    const btn = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  bg-purple-600 text-white" : ""} border-2  text-xl font-bold py-2 px-8  rounded-3xl`
            }
        >
            All Products
        </NavLink>
        <NavLink
            to="laptop"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  bg-purple-600 text-white" : ""} border-2  text-xl font-bold py-2 px-8  rounded-3xl`
            }
        >
            Laptop
        </NavLink>
        <NavLink
            to="mobile"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  bg-purple-600 text-white" : ""} border-2  text-xl font-bold py-2 px-8  rounded-3xl`
            }
        >
            Mobile
        </NavLink>
        <NavLink
            to="watch"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  bg-purple-600 text-white" : ""} border-2  text-xl font-bold py-2 px-8  rounded-3xl`
            }
        >
            Watch
        </NavLink>
        <NavLink
            to="headphone"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  bg-purple-600 text-white" : ""} border-2  text-xl font-bold py-2 px-8  rounded-3xl`
            }
        >
            Headphone
        </NavLink>
        <NavLink
            to="bluetooth"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  bg-purple-600 text-white" : ""} border-2  text-xl font-bold py-2 px-8  rounded-3xl`
            }
        >
            Bluetooth
        </NavLink>



    </>
    return (
        <div className="bg-purple-50 p-5 rounded-md flex flex-col gap-4 h-fit">

            {btn}
        </div>
    );
};

export default CategoriesBtn;