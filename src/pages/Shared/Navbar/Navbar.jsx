import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserAuth } from '../../../Auth/Auth';
import { FaSignOutAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';
import shopLogo from "../../../assets/icon/trolley.png";
import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {
  const { user, logOut } = useContext(UserAuth);
  const [cart] = useCart();
  const{isAdmin} = useAdmin();


  const handleOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: 'Success!',
          text: 'Sign Out Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch(error => {
        const message = error.message;
        Swal.fire({
          title: 'Error!',
          text: message,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }


  const navItems = <>
  <li>
    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
  </li>
  <li>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "default")}>contact us</NavLink>
  </li>
  <li>
    <NavLink to={`${isAdmin ? "/dashboard/adminHome" : "/dashboard/home"}`}className={({ isActive }) => (isActive ? "active" : "default")}>Dashboard</NavLink>
  </li>
  <li>
    <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "default")}>Our Menu</NavLink>
  </li>
  <li>
    <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "default")}>Our shop</NavLink>
  </li>
  <li>
  <NavLink to="/dashboard/myCart" className=" px-0 py-0 mr-2">
    <img src={shopLogo} alt="Shop" className='w-[30px] ml-2'/>
    <div className="badge badge-xl absolute badge-secondary left-7 top-3 font-bold">{cart?.length}</div>
  </NavLink>
  </li>

  {
    user ? <li>
      <span className='default' onClick={handleOut}>Sign Out <FaSignOutAlt /></span>
    </li>
      : <li>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "default")}>Sign In</NavLink>
      </li>
  }
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