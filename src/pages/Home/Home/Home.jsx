import React from 'react';
import Banner from '../Banner/Banner';
import OrderSlider from '../OrderSlider/OrderSlider';
import BistroBoss from '../BistroBoss/BistroBoss';
import FromMenu from '../FromMenu/FromMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <section>
            <Banner />
            <OrderSlider />
            <BistroBoss />
            <FromMenu />
            <Featured />
        </section>
    );
};

export default Home;