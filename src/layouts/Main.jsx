import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
    const location = useLocation();
    const loginPath = location.pathname.includes("login");
    const registerPath = location.pathname.includes("register");
    return (
        <section>
            {registerPath || loginPath || <Navbar></Navbar>}
            <Outlet></Outlet>
            {registerPath || loginPath || <Footer></Footer>}
        </section>
    );
};

export default Main;