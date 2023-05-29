import React from 'react';
import { HiBars3BottomLeft,HiHome,HiCalendarDays } from "react-icons/hi2";
import { FaWallet,FaShoppingCart,FaRegCalendarCheck,FaShoppingBasket,FaPhoneAlt,FaPenFancy} from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label className="drawer-button lg:hidden absolute top-2 left-2" htmlFor="my-drawer-2">
                    <HiBars3BottomLeft className='w-10 h-8 text-primary' />
                </label>

            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content space-y-5">
                    <Link to="/">
                        <p className='text-neutral brandTitle text-xl mb-12 text-center'><span className='font-black'>BISTRO BOSS</span><br /> <span className='tracking-widest font-bold'>Restaurant</span></p>
                    </Link>

                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiHome className='w-7 h-5'/> Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/reservation" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiCalendarDays className='w-7 h-5'/> reservation</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/payment" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><FaWallet className='w-7 h-5'/> payment history</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/myCart" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><FaShoppingCart className='w-7 h-5'/> my cart</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard/review" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><FaPenFancy className='w-7 h-5'/> add review</NavLink>
                    </li>


                    <li className='mb-5'>
                        <NavLink to="/dashboard/booking" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><FaRegCalendarCheck className='w-7 h-5'/> my booking</NavLink>
                    </li>

                   <div className='mt-6'>
                   <hr/>
                   </div>
                   <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiHome className='w-7 h-5'/> Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/menu" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiBars3BottomLeft className='w-7 h-5'/> Menu</NavLink>
                    </li>

                    <li>
                        <NavLink to="/shop" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><FaShoppingBasket className='w-7 h-5'/> Shop</NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><FaPhoneAlt className='w-7 h-5'/> Contact</NavLink>
                    </li>
                </ul>

            </div>
        </div>
        </div>

    );
};

export default Dashboard;