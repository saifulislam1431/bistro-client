import React from 'react';
import {Link} from "react-router-dom"
const PrimaryBtn = ({ btnTitle,category }) => {
    return (
        <div className='text-center'>
            <Link to={`/shop/${category}`} className='mt-10'>
            <button className='px-3 py-1 border-b-2 border-black rounded-lg uppercase text-sm font-medium hover:bg-black hover:text-white'>{btnTitle}</button>
        </Link>
        </div>
    );
};

export default PrimaryBtn;