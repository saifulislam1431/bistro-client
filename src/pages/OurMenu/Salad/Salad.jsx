import React, { useEffect, useState } from 'react';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import banner from "../../../assets/menu/salad-bg.jpg";
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import MenuCard from '../../Shared/MenuCard/MenuCard';
const Salad = () => {
    const[salads, setSalads] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const saladMenu = data.filter(salad=>salad.category == "salad")
            setSalads(saladMenu)
        })
    },[])
    return (
<section className='my-10'>
            <PageBanner
            img={banner}
            title="Pizza"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </PageBanner>


<div className='flex items-center justify-center my-10 px-2 lg:px-5'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
{
    salads.map(menu=><MenuCard
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

export default Salad;