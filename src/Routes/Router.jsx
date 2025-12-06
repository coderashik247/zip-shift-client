import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayouts from "../layouts/DashboardLayouts";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";

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
                path:"rider",
                element: <PrivateRoute> <Rider></Rider> </PrivateRoute>
            },
            {
                path:"send-parcel",
                element: <PrivateRoute> <SendParcel></SendParcel> </PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
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
    },
    {
        path:'dashboard',
        element: <PrivateRoute> <DashboardLayouts></DashboardLayouts> </PrivateRoute>,
        children:[
            {
                path:'my-parcels',
                Component: MyParcels,
            },
            {
                path:'payment/:parcelId',
                Component: Payment
            },
            {
                path:'payment-success',
                Component: PaymentSuccess,
            },
            {
                path:'payment-cancelled',
                Component: PaymentCancelled,
            }
        ]
    }
])
                                    