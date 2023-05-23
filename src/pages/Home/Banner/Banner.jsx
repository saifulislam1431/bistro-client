import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../../assets/home/01.jpg";
import slider2 from "../../../assets/home/02.jpg";
import slider3 from "../../../assets/home/03.png";
import slider4 from "../../../assets/home/04.jpg";
import slider5 from "../../../assets/home/05.png";
import slider6 from "../../../assets/home/06.png";


const Banner = () => {
    return (
        <section>
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={slider1} alt='slider1' />
                </div>
                <div>
                    <img src={slider2} alt='slider2' />
                </div>
                <div>
                    <img src={slider3} alt='slider3' />
                </div>
                <div>
                    <img src={slider4} alt='slider4' />
                </div>
                <div>
                    <img src={slider5} alt='slider5' />
                </div>
                <div>
                    <img src={slider6} alt='slider6' />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;