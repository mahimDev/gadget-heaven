import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Details from "../Components/DetailsCard/Details";
import Laptop from "../Components/Laptop/Laptop";
import Mobile from "../Components/Mobile/Mobile";
import Watch from "../Components/Watch/Watch";
import Headphone from "../Components/Headphone/Headphone";
import Bluetooth from "../Components/Bluetooth/Bluetooth";
import ErrorPage from "../Shared/Error/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        loader: () => fetch('../data.json'),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('../data.json'),
                children: [
                    {
                        path: '/laptop',
                        element: <Laptop></Laptop>,
                        loader: () => fetch('../data.json'),
                    },
                    {
                        path: '/mobile',
                        element: <Mobile></Mobile>,
                        loader: () => fetch('../data.json'),
                    },
                    {
                        path: '/watch',
                        element: <Watch></Watch>,
                        loader: () => fetch('../data.json'),
                    },
                    {
                        path: '/headphone',
                        element: <Headphone></Headphone>,
                        loader: () => fetch('../data.json'),
                    },
                    {
                        path: '/bluetooth',
                        element: <Bluetooth></Bluetooth>

                    }
                ]
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                // loader: () => fetch('../data.json'),
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]

    }
])
export default router;