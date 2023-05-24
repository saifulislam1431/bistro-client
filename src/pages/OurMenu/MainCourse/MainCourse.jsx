import React, { useEffect, useState } from 'react';
import banner from "../../../assets/menu/mainCourse.jpg";
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import MenuCard from '../../Shared/MenuCard/MenuCard';
import PageBanner from '../../Shared/PageBanner/PageBanner';

const MainCourse = () => {
    const[mainCourse, setMainCourse] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const mainCourseMenu = data.filter(mainMenu=>mainMenu.category == "mainCourse")
            setMainCourse(mainCourseMenu)
        })
    },[])
    return (
<section className='my-10'>
            <PageBanner
            img={banner}
            title="Main Course"
            description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            >
            </PageBanner>


<div className='flex items-center justify-center my-10 px-2 lg:px-5'>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
{
    mainCourse.map(menu=><MenuCard
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

export default MainCourse;