import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Details from "../Components/DetailsCard/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../data.json'),
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('../data.json'),
            },
        ]

    }
])
export default router;