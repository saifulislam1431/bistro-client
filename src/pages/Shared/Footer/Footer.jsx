import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from "../../../assets/icon/facebook.png";
import icon2 from "../../../assets/icon/instagram.png";
import icon3 from "../../../assets/icon/twitter.png";

const Footer = () => {
    return (
        <footer className='mt-16'>
            <footer className="flex flex-col lg:flex-row items-center justify-around w-full text-white text-center">
                <div className='flex flex-col space-y-1 w-full bg-[#1F2937] p-10'>
                    <span className="footer-title">CONTACT US</span>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00
                    </p>
                </div>
                <div className='flex flex-col w-full px-10  py-14 bg-[#111827]'>
                    <span className="footer-title">Follow US</span>
                    <p>Join us on social media</p>
                    <div className='flex items-center justify-center mt-4 space-x-2'>

                        <img src={icon1} alt="Facebook" className='w-9' />
                        <img src={icon2} alt="Instagram" className='w-9' />
                        <img src={icon3} alt="Twitter" className='w-9' />
                    </div>
                </div>
            </footer>
            <footer className="px-10 py-4 bg-black text-xs text-white text-center">
            <p className='text-center'>Copyright © Saiful Islam. All rights reserved.</p>
            </footer>
        </footer>
    );
};

export default Footer;