import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"coverage",
                element: <Coverage></Coverage>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            }
        ]
    },
    {
        path:"/",
        Component: AuthLayouts,
        children:[
            {
                path:'login',
                Component: Login
            },
            {
                path:'register',
                Component: Register
            }
        ]
    }
])
                                    