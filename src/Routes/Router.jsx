import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            }
        ]
    }
])
                                    