import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../components/Error";
import Games from "../pages/Games";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

import PrivateRoute from "../Provider/PrivateRoute";
import GamesDetails from "../pages/GamesDetails";
import ForgotPassword from "../pages/ForgotPassword";
import About from "../pages/About";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import Loading from "../pages/Loading";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
            {
                path: "/auth/forgot-password",
                element: <ForgotPassword></ForgotPassword>
            },
        ]
    },
    {
        path: "/games",
        element: <Games></Games>,
        loader: () => fetch("/games.json"),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "/games-details/:id",
        element: <PrivateRoute>
            <GamesDetails></GamesDetails>
        </PrivateRoute>,
        loader: () => fetch("/games.json"),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "/profile",
        element: <MyProfile></MyProfile>
    },
    {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>
    },
    {
        path: "/*",
        element: <Error></Error>
    },

]);
export default router;