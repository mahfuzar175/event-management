import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Services from "../pages/Home/Services";
import Review from "../pages/Home/Review";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import AboutUs from "../pages/Home/AboutUs";
import PrivateRoute from "./PrivateRout/PrivateRoute";
import ContactUs from "../pages/ContactUs";
import Ratings from "../pages/Ratings";
import Reviews from "../components/Reviews";


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
                path: '/contactus',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
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
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/ratings',
                element: <PrivateRoute><Ratings></Ratings></PrivateRoute>
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