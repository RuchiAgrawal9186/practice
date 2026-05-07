import { createBrowserRouter } from "react-router-dom";
import UsersList from "../Pages/UsersList";
import UserDetails from "../Pages/UserDetails";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <UsersList />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
