import React from 'react';
import Banner from '../Banner/Banner';
import OrderSlider from '../OrderSlider/OrderSlider';
import BistroBoss from '../BistroBoss/BistroBoss';
import FromMenu from '../FromMenu/FromMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Tesimonial';
import Recommended from '../Recommended/Recommended';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <OrderSlider />
            <BistroBoss />
            <FromMenu />
            <Recommended />
            <Featured />
            <Testimonial />
        </section>
    );
};

export default Home;