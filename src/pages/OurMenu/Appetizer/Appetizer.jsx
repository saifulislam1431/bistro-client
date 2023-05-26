import React, { useEffect, useState } from 'react';
import banner from "../../../assets/menu/appetizer.jpg";
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import useMenu from '../../../Hooks/useMenu';

const Appetizer = () => {
    const[menu] = useMenu();
    const appetizerMenu = menu.filter(mainMenu=>mainMenu.category == "appetizer");
    return (
<section className='my-10'>
            <PageBanner
            img={banner}
            title="Appetizer"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </PageBanner>


<div className='flex items-center justify-center my-10 px-2 lg:px-5'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
{
    appetizerMenu.map(menu=><MenuCard
    key={menu._id}
    menu={menu}
    ></MenuCard>)
}
</div>
</div>

            <PrimaryBtn
btnTitle="ORDER YOUR FAVOURITE FOOD"
category="appetizer"
></PrimaryBtn>             
        </section>
    );
};

export default Appetizer;