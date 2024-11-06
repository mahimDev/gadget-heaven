import { Link, Outlet, useLoaderData } from "react-router-dom";
import NavBer from "../Shared/NavBer/NavBer";
import Footer from "../Shared/Footer/Footer";
import { createContext, useState, } from "react";
import { Helmet } from "react-helmet";


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

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadget Heaven</title>
                <Link to='/dashboard'></Link>
            </Helmet>

            <DataContext.Provider value={allData} >
                <NavBer></NavBer>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataContext.Provider>
        </div>
    );
};

export default Layout;