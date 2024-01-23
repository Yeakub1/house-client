import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../../Pages/NotFoundPage";
import MainLayout from "../../layout/MainLayout";
import Register from "../../Pages/Register";
import LogIn from "../../Pages/LogIn";
import Dashboard from "../../Pages/Dashboard";
import Home from "../../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
