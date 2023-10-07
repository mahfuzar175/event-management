import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services";
import Review from "../pages/Home/Review";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import AboutUs from "../pages/Home/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
                
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: async () => {
                    const res = await fetch('/services.json');
                    const services = await res.json();
                    return services;}
  
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;