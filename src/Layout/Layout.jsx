import { Outlet } from "react-router-dom";
import NavBer from "../Shared/Navber/Navber";

const Layout = () => {

    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;