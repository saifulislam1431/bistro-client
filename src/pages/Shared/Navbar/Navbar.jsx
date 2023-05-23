import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from "../../../assets/icon/user.png";
import cart from "../../../assets/icon/trolley.png";
import logo from "../../../assets/logo.png"

const Navbar = () => {
  const navItems = <>
    <li>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "default")}>contact us</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "default")}>Dashboard</NavLink>
    </li>
    <li>
      <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "default")}>Our Menu</NavLink>
    </li>
    <li>
      <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "default")}>Our shop</NavLink>
      <NavLink to="/cart" className=" px-0 py-0 mr-2"><img src={cart} alt="Cart" className='w-[30px]' /></NavLink>
    </li>

    <li>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "default")}>Sign In</NavLink>
    </li>
  </>
  return (
    <div className="navbar bg-black bg-opacity-50 fixed z-10 max-w-screen-xl">
      <div className='navbar-start lg:hidden'>
      <Link to="/">
          <p className='text-white brandTitle'><span className='font-black'>BISTRO BOSS</span><br /> <span className='tracking-widest'>Restaurant</span></p>
        </Link>
      </div>
      <div className="navbar-end lg:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#EEFF25"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-box w-52 right-0">
            {navItems}
          </ul>
        </div>
        <Link to="/" className='hidden lg:flex'>
          <p className='text-white brandTitle'><span className='font-black'>BISTRO BOSS</span><br /> <span className='tracking-widest'>Restaurant</span></p>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;