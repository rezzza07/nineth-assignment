import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../components/Error";
import Games from "../pages/Games";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element:<Login></Login>,
            },
            {
                path:"/auth/register",
                element: <Register></Register>  ,
            },
        ]
    },
    {
        path: "/games",
        element: <Games></Games>,
        loader: () => fetch("/games.json"),
    },
    {
        path: "/*",
        element: <Error></Error>
    },

]);
export default router;