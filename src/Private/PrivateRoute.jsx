import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { GridLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center my-10">
            <GridLoader color={"purple"} />
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;