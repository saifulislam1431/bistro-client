import React from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner';
import banner from "../../assets/menu/banner3.jpg"
import { Helmet } from 'react-helmet-async';
import Offered from './Offered/Offered';

const OurMenu = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageBanner
            img={banner}
            title="Our menu"
            description="Would you like to try a dish?"
            >
            </PageBanner>
<Offered />
        </section>
    );
};

export default OurMenu;