import { Outlet } from "react-router-dom";
import NavBer from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {

    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;