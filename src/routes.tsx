import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { pagesManager } from "./pages/managerPageRoute";
import React from "react";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    ...pagesManager.map(({ path, component }) => ({
        path,
        element: React.createElement(component),
    })),
]);
export default router;
