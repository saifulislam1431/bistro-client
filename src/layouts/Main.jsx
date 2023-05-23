import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </section>
    );
};

export default Main;