import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../components/Error";
import Games from "../pages/Games";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/e",
        element: <h2>AUTH LAY</h2>
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