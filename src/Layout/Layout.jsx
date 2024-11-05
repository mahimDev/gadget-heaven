import { Outlet, useLoaderData } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import Footer from "../Shared/Footer/Footer";
import { createContext, useState, } from "react";


export const DataContext = createContext('')
const Layout = () => {
    const data = useLoaderData()
    const [addToCard, setAddToCard] = useState([])
    const [wishlist, setWishlist] = useState([])

    const allData = {
        data,
        setAddToCard,
        addToCard,
        setWishlist,
        wishlist
    }
    console.log(wishlist)
    return (
        <div>
            <DataContext.Provider value={allData} >
                <NavBer></NavBer>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataContext.Provider>
        </div>
    );
};

export default Layout;