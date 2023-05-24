import React from 'react';

const PrimaryBtn = ({btnTitle}) => {
    return (
        <div className='mt-10 text-center'>
        <button className='px-3 py-1 border-b-2 border-black rounded-lg uppercase text-sm font-medium hover:bg-black hover:text-white'>{btnTitle}</button>
    </div>
    );
};

export default PrimaryBtn;