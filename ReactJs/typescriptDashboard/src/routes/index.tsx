import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import SegmentPage from "../pages/SegmentPage";
import ConnectorsPage from "../pages/ConnectorsPage";
import DataCatalogPage from "../pages/DataCatalogPage";
import CustomersPage from "../pages/CustomersPage";
import GovernancePage from "../pages/GovernancePage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <SegmentPage />,
          },
          {
            path: "connectors",
            element: <ConnectorsPage />,
          },
          {
            path: "data-catalog",
            element: <DataCatalogPage />,
          },
          {
            path: "customers",
            element: <CustomersPage />,
          },
          {
            path: "governance",
            element: <GovernancePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  },
]);
