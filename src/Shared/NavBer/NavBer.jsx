import { NavLink } from "react-router-dom";

const NavBer = () => {
    return (
        <div>
            <div className="top-0 sticky z-10 bg-purple-600 backdrop-blur-xl w-11/12 mx-auto ">
                <div className="flex justify-between  w-11/12 mx-auto items-center py-5 text-white ">
                    <div>
                        <button className="font-semibold border border-purple-600 hover:border-white py-1 px-4 rounded text-2xl ">Gadget Heaven</button>
                    </div>
                    <div className="flex items-center gap-4">
                        <ul className="flex gap-4 text-lg font-semibold">
                            <NavLink > <li>Home</li></NavLink>
                            <NavLink ><li>Statistics</li></NavLink>
                            <NavLink ><li>Dashboard</li></NavLink>
                            <NavLink ><li>Contact</li></NavLink>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <button className="border-2 border-[#ffff]  p-2 font-semibold rounded-full">  💸 </button>
                        <button className="border-2 border-[#ffff]  p-2 font-semibold rounded-full">  💸 </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBer;