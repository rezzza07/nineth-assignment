import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/auth",
        element: <h2>AUTH LAY</h2>
    },
    {
        path: "/games",
        element: <h2>games</h2>
    },
    {
        path: "/*",
        element: <h2>Error</h2>
    },

]);
export default router;