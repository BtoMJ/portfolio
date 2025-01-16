import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home/Home";
import Design from "../views/Design/Design";
import Contact from "../views/Contact/Contact";
import Error404 from "../views/Error404/Error404";
import Web from "../views/Web/Web";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/design',
        element: <Design />
    },
    {
        path: '/web',
        element: <Web />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);

const MyRoutes = () =>  <RouterProvider router={router} />;

export default MyRoutes