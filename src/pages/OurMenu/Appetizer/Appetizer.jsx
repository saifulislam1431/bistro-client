import React, { useEffect, useState } from 'react';
import banner from "../../../assets/menu/appetizer.jpg";
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import PageBanner from '../../Shared/PageBanner/PageBanner';

const Appetizer = () => {
    const[appetizer, setAppetizer] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const appetizerMenu = data.filter(appetizer=>appetizer.category == "appetizer")
            setAppetizer(appetizerMenu)
        })
    },[])
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
    appetizer.map(menu=><MenuCard
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

export default Appetizer;