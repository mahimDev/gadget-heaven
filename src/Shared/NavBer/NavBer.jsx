import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Layout/Layout";
import { AuthContext } from "../../Auth/AuthProvider";


const NavBer = () => {
    const { signOutUser, user } = useContext(AuthContext)
    const { addToCard, wishlist } = useContext(DataContext)
    const { pathname } = useLocation()
    const handleLogOut = () => {
        signOutUser()
            .then((res) => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const nav1 = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-b-2 border-purple-600 `
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
                `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-b-2 border-purple-600  `
            }
        >
            Dashboard
        </NavLink>
        {user ?
            <NavLink

                onClick={handleLogOut}
                className={({ isActive, isPending }) =>
                    `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-2 border-purple-600 px-3 `
                }
            >
                LogOut
            </NavLink>
            :
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    `${isPending ? "pending" : isActive ? "active  border-white" : ""} border-b-2 border-purple-600  `
                }
            >
                Login
            </NavLink>
        }

    </>
    // const nav2 = <>
    //     <NavLink
    //         to="/"
    //         className={({ isActive, isPending }) =>
    //             `${isPending ? "pending" : isActive ? "active  border-purple-600" : ""} border-b-2 border-white `
    //         }
    //     >
    //         Home
    //     </NavLink>
    //     <NavLink
    //         to="/static"
    //         className={({ isActive, isPending }) =>
    //             `${isPending ? "pending" : isActive ? "active  border-purple-600" : ""} border-b-2 border-white`
    //         }
    //     >
    //         Statistics
    //     </NavLink>
    //     <NavLink
    //         to="/dashboard"
    //         className={({ isActive, isPending }) =>
    //             `${isPending ? "pending" : isActive ? "active  border-purple-600" : ""} border-b-2 border-white `
    //         }
    //     >
    //         Dashboard
    //     </NavLink>
    //     <NavLink
    //         to="/login"
    //         className={({ isActive, isPending }) =>
    //             `${isPending ? "pending" : isActive ? "active  border-purple-600" : ""} border-b-2 border-white  `
    //         }
    //     >
    //         Login
    //     </NavLink>

    // </>

    return (
        <div>
            {
                pathname === '/' ?
                    <div className="bg-purple-600">
                        <div className="  text-white backdrop-blur-xl w-11/12 mx-auto ">
                            <div className="flex justify-between  w-11/12 mx-auto items-center py-5  ">
                                <div>
                                    <button className="font-semibold border border-purple-600 hover:border-white py-1 px-4 rounded text-2xl ">Gadget Heaven </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <ul className="flex gap-4 text-lg font-semibold">
                                        {nav1}
                                    </ul>
                                    <div className="w-10">
                                        <img className="rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="relative">
                                        <button
                                            className="border-2 border-white p-[11px] rounded-full font-bold text-purple-600 "
                                        ><img className="w-5" src="https://img.icons8.com/?size=100&id=23175&format=png&color=FFFFFF" alt="" /></button>
                                        <p className="absolute top-0 left-10 bg-white rounded-full px-1 text-purple-600">  {addToCard.length}</p>
                                    </div>
                                    <div className="relative">
                                        <button
                                            className="border-2 border-white p-[11px] rounded-full font-bold text-purple-600 "
                                        ><img className="w-5" src="https://img.icons8.com/?size=100&id=37975&format=png&color=FFFFFF" alt="" /></button>
                                        <p className="absolute top-0 left-10 bg-white rounded-full px-1 text-purple-600">  {wishlist.length}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <div className=" bg-white text-purple-600 backdrop-blur-xl w-11/12 mx-auto ">
                        <div className="flex justify-between  w-11/12 mx-auto items-center py-5  ">
                            <div>
                                <button className="font-semibold  border-2 border-white hover:border-purple-600 py-1 px-4 rounded text-2xl ">Gadget Heaven </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <ul className="flex gap-4 text-lg font-semibold">
                                    {nav1}
                                </ul>
                            </div>
                            <div className="flex gap-4">
                                <div className="relative">
                                    <button
                                        className="border-2 border-purple-600 p-[11px] rounded-full font-bold text-purple-600 "
                                    ><img className="w-5" src="https://img.icons8.com/?size=100&id=23175&format=png&color=7950F2" alt="" /></button>
                                    <p className="absolute top-0 left-10 bg-white rounded-full px-1 text-purple-600">  {addToCard.length}</p>
                                </div>
                                <div className="relative">
                                    <button
                                        className="border-2 border-purple-600 p-[11px] rounded-full font-bold text-purple-600 "
                                    ><img className="w-5" src="https://img.icons8.com/?size=100&id=37975&format=png&color=7950F2" alt="" /></button>
                                    <p className="absolute top-0 left-10 bg-white rounded-full px-1 text-purple-600">  {wishlist.length}</p>
                                </div>

                            </div>
                        </div>
                    </div>

            }




        </div>
    );
};

export default NavBer;