import React from 'react';

const SectionComponent = ({heading,subHeading}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[#D99904] italic text-sm'>---{subHeading}---</p>
            <h1 className='py-2 mt-2 border-t-2 border-b-2 w-fit px-12 uppercase tracking-wider font-semibold'>{heading}</h1>
        </div>
    );
};

export default SectionComponent;