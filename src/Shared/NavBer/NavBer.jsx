import { NavLink } from "react-router-dom";
import { getItemAddToCards, getItemWishlist } from "../../Utils/utils";

const NavBer = () => {
    const items = getItemAddToCards()
    const wishes = getItemWishlist()
    const nav = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-b-2 border-purple-600`
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/static"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-b-2 border-purple-600`
            }
        >
            Statistics
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-b-2 border-purple-600`
            }
        >
            Dashboard
        </NavLink>

    </>
    return (
        <div>
            <div className="top-0 sticky z-10 bg-purple-600 backdrop-blur-xl w-11/12 mx-auto ">
                <div className="flex justify-between  w-11/12 mx-auto items-center py-5 text-white ">
                    <div>
                        <button className="font-semibold border border-purple-600 hover:border-white py-1 px-4 rounded text-2xl ">Gadget Heaven </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <ul className="flex gap-4 text-lg font-semibold">
                            {nav}
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <div className="relative">
                            <button
                                className="border-2 border-white p-[11px] rounded-full font-bold text-purple-600 "
                            ><img className="w-5" src="https://img.icons8.com/?size=100&id=23175&format=png&color=FFFFFF" alt="" /></button>
                            <p className="absolute ">  {items.length}</p>
                        </div>
                        <div>
                            <button
                                className="border-2 border-white p-[11px] rounded-full font-bold text-purple-600 "
                            ><img className="w-5" src="https://img.icons8.com/?size=100&id=37975&format=png&color=FFFFFF" alt="" /></button>
                            <p className="absolute ">  {wishes.length}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBer;