import React from 'react';
import Banner from '../Banner/Banner';
import OrderSlider from '../OrderSlider/OrderSlider';
import BistroBoss from '../BistroBoss/BistroBoss';

const Home = () => {
    return (
        <section>
            <Banner />
            <OrderSlider />
            <BistroBoss />
        </section>
    );
};

export default Home;