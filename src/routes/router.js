import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import NeedBlood from "../pages/NeedBlood";
import AboutUS from "../pages/AboutUS";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/need-blood',
                element: <NeedBlood />
            },
            {
                path: '/about-us',
                element: <AboutUS />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },
   
]);

export default router;