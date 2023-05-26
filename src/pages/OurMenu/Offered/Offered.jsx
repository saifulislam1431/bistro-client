import React, { useEffect, useState } from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import useMenu from '../../../Hooks/useMenu';

const Offered = () => {
    const[menu] = useMenu();
    const offerMenu = menu.filter(mainMenu=>mainMenu.category == "offered");
    return (
        <section className='my-14'>
            <SectionComponent
                heading="TODAY'S OFFER"
                subHeading="Don't miss"
            ></SectionComponent>

            <div className='flex items-center justify-center px-2 lg:px-5'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        offerMenu.map(menu => <MenuCard
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

export default Offered;