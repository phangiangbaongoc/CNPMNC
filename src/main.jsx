import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import "../index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import ProductPage from "./pages/Product/list_product.jsx";
import CreateProduct from "./pages/Product/product.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Order from "./pages/OrderList/Order.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";
import CreateWare from "./pages/Ware/ware.jsx";
import WarePage from "./pages/Ware/list_ware.jsx";
import UpdateProduct from "./pages/Product/productedit.jsx";
import CreateEmployee from "./components/Staff/CreateEmployee.jsx";
import StaffPage from "./pages/staff/list_staff.jsx";
import FoodItem from "./components/FoodItem/FoodItem.jsx";
import StaffDisplay from "./components/StaffDisplay/StaffDisplay.jsx";
import StaffItem from "./components/StaffItem/StaffItem.jsx";
import UpdateEmployee from "./components/Staff/UpdateEmployee.jsx";
import Dashboard from "./components/revenue/revenue.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Thêm vào đây
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
        errorElement: <ErrorPage />, // Thêm vào đây
      },

      {
        path: "listproduct",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Dashboard />,
      },
      {
        path: "list_ware",
        element: <WarePage />,
      },
      {
        path: "list_staff",
        element: <StaffPage />,
      },
    ],
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "product",
    element: <CreateProduct />,
  },
  {
    path: "ware",
    element: <CreateWare />,
  },
  {
    path: "product_edit",
    element: <UpdateProduct />,
  },
  {
    path: "createStaff",
    element: <CreateEmployee />,
  },
  {
    path: "staffdisplay",
    element: <StaffDisplay />,
  },
  {
    path: "staffItem",
    element: <StaffItem />,
  },
  {
    path: "staff_edit",
    element: <UpdateEmployee />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>
);
