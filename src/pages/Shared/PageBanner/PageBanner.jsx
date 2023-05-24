import React from 'react';
import { Parallax } from 'react-parallax';

const PageBanner = ({img,title,description}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImageAlt="Banner"
        strength={-200}
    >
        <div className="hero h-[500px]" style={{ backgroundImage: `url("${img}")` }}>
        <div className=""></div>
        <div className="hero-content text-center text-white">
          <div className=" w-full bg-black bg-opacity-70 px-7 lg:px-14 py-5">
            <h1 className="mb-5 text-5xl font-bold brandTitle tracking-widest">{title}</h1>
            <p className="mb-5 brandTitle">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>


    );
};

export default PageBanner;