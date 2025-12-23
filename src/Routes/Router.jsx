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
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UserManagement from "../pages/Dashboard/UserManagement/UserManagement";
import AdminRoute from "./AdminRoute";
import AssginRiders from "../pages/Dashboard/AssginRiders/AssginRiders";
import RiderRoute from "./RiderRoute";
import AssignDeliveries from "../pages/Dashboard/Assignedeliveries/AssignDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompleteDeliveries/CompleteDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            {" "}
            <Rider></Rider>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            {" "}
            <SendParcel></SendParcel>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
       {
        path: 'parcel-track/:trackingId', 
        Component: ParcelTrack
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayouts></DashboardLayouts>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            {" "}
            <ApproveRiders></ApproveRiders>{" "}
          </AdminRoute>
        ),
      },
      // Rider Routes Only
      {
        path: "assigned-deliveries",
        element: (
          <RiderRoute>
            <AssignDeliveries></AssignDeliveries>
          </RiderRoute>
        ),
      },
      {
        path: "completed-deliveries",
        element: (
          <RiderRoute>
            <CompletedDeliveries></CompletedDeliveries>
          </RiderRoute>
        ),
      },
      // Admin Routes Only
      {
        path: "assgin-riders",
        element: (
          <AdminRoute>
            {" "}
            <AssginRiders></AssginRiders>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "users-management",
        // Component: UserManagement
        element: (
          <AdminRoute>
            {" "}
            <UserManagement></UserManagement>{" "}
          </AdminRoute>
        ),
      },
    ],
  },
]);
