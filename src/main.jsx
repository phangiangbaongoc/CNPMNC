import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import StaffPage from "./pages/list_staff.jsx";
import ProductPage from "./pages/list_product.jsx";
import CreateProduct from "./pages/product.jsx";
import CreateStaff from "./pages/staff.jsx";
import DetailUser from "./pages/detail_user.jsx";
import DetailProduct from "./pages/detail_product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "liststaff",
        element: <StaffPage />,
      },
      {
        path: "listproduct",
        element: <ProductPage />,
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
    path: "staff",
    element: <CreateStaff />,
  },
  {
    path: "product",
    element: <CreateProduct />,
  },
  {
    path: "detail",
    element: <DetailProduct />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
