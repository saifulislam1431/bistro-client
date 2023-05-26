import React, { useEffect, useState } from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import useMenu from '../../../Hooks/useMenu';

const FromMenu = () => {
    const[menu] = useMenu();
    const popularMenu = menu.filter(mainMenu=>mainMenu.category == "popular");
    return (
        <section className='my-10'>
            <SectionComponent heading="FROM OUR MENU" subHeading="Check it out"></SectionComponent>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5'>
                {
                    popularMenu.map(menu => <MenuCard
                        key={menu._id}
                        menu={menu}
                    ></MenuCard>)
                }
            </div>

<PrimaryBtn
btnTitle="View Full Menu"
></PrimaryBtn>
        </section>
    );
};

export default FromMenu;