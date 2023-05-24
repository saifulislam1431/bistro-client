import React, { useEffect, useState } from 'react';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import banner from "../../../assets/menu/pizza-bg.jpg";
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import MenuCard from '../../Shared/MenuCard/MenuCard';
const Pizzas = () => {
    const[pizzas, setPizza] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const pizzaMenu = data.filter(pizza=>pizza.category == "pizza")
            setPizza(pizzaMenu)
        })
    },[])
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
    pizzas.map(menu=><MenuCard
    key={menu._id}
    menu={menu}
    ></MenuCard>)
}
</div>
</div>

            <PrimaryBtn
btnTitle="ORDER YOUR FAVOURITE FOOD"
></PrimaryBtn>             
        </section>
    );
};

export default Pizzas;