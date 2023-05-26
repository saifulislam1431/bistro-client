import React, { useEffect, useState } from 'react';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import banner from "../../../assets/menu/pizza-bg.jpg";
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import useMenu from '../../../Hooks/useMenu';
const Pizzas = () => {
    const[menu] = useMenu();
    const pizzaMenu = menu.filter(mainMenu=>mainMenu.category == "pizza");
    return (
        <section>
            <PageBanner
            img={banner}
            title="Pizza"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </PageBanner>


<div className='flex items-center justify-center my-10 px-2 lg:px-5'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
{
    pizzaMenu.map(menu=><MenuCard
    key={menu._id}
    menu={menu}
    ></MenuCard>)
}
</div>
</div>

            <PrimaryBtn
btnTitle="ORDER YOUR FAVOURITE FOOD"
category="pizza"
></PrimaryBtn>             
        </section>
    );
};

export default Pizzas;