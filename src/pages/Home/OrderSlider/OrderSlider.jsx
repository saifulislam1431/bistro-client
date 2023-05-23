import React from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";


const OrderSlider = () => {
    return (
        <section className='my-10'>
            <SectionComponent
            heading="ORDER ONLINE"
            subHeading="From 11:00am to 10:00pm"
            ></SectionComponent>
            <div className='my-10'>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
       
          navigation={true}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slider1} alt="Slider1" />
            <p className='-mt-8 pb-10 text-center text-white brandTitle lg:text-xl'>Salads</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="Slider2" />
            <p className='-mt-8 pb-10 text-center text-white brandTitle lg:text-xl'>Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="Slider3" />
            <p className='-mt-8 pb-10 text-center text-white brandTitle lg:text-xl'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="Slider4" />
            <p className='-mt-8 pb-10 text-center text-white brandTitle lg:text-xl'>Desert</p>
        </SwiperSlide>

      </Swiper>
            </div>
        </section>
    );
};

export default OrderSlider;