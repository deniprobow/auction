import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Wrapper from "../components/Wrapper";
import Homepage from "../pages/Homepage";
import Deposit from "../pages/Deposit";
import CreateItem from "../pages/CreateItem";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/homepage",
        element: <Homepage />,
    },
    {
        path: "/createitem",
        element: <CreateItem />,
    },
    {
        path: "/deposit",
        element: <Deposit/>,
    },
  ]);

  export default  router;
  
  