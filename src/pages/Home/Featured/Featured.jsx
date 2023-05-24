import React from 'react';
import banner from "../../../assets/home/featured.jpg";
import "./featured.css"
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
const Featured = () => {
    return (
        <section className='my-14 featureImg bg-fixed'>
            <div className='bg-black bg-opacity-50 w-full py-10 px-14'>
                <SectionComponent
                    heading="Featured Menu"
                    subHeading="Check it out"
                ></SectionComponent>
                <div className='my-10 flex flex-col lg:flex-row text-white gap-5 lg:px-10 items-center justify-around'>
                    <img src={banner} alt="Banner" className='lg:w-1/2 rounded-lg' />
                    <div className='space-y-2'>
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='rounded-lg px-2 py-1 text-sm hover:bg-white hover:text-black border-b-2'>READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;