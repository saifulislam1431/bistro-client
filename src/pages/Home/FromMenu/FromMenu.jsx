import React, { useEffect, useState } from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const FromMenu = () => {
    const[menus , setMenu] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const popularMenu = data.filter(popular => popular.category == "popular")
            setMenu(popularMenu)
        })
    },[])
    return (
        <section className='my-10'>
            <SectionComponent heading="FROM OUR MENU" subHeading="Check it out"></SectionComponent>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5'>
{
    menus.map(menu=><MenuCard
    key={menu._id}
    menu={menu}
    ></MenuCard>)
}                
            </div>
        </section>
    );
};

export default FromMenu;