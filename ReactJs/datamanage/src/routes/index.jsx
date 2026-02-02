import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { index: true, element: <Navigate to="login" /> },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
