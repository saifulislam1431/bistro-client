import React, { useEffect, useState } from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const[reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])


    return (
        <section className='my-14'>
            <SectionComponent
                heading="TESTIMONIALS"
                subHeading="What Our Clients Say"
            ></SectionComponent>

            <div>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]} className="mySwiper">

{
    reviews.map(review =>
        <SwiperSlide>
<div  className=' flex items-center justify-center flex-col text-center my-14 space-y-4 px-8 lg:px-16'>
<Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
<FaQuoteLeft className='w-16 h-16'/>
<p>{review.details}</p>
<h1 className='text-[#CD9003] font-medium'>{review.name}</h1>
</div>           
         </SwiperSlide>
        )
 }      
                   

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;