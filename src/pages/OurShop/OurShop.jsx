import React, { useEffect, useState } from 'react';
import PageBanner from '../Shared/PageBanner/PageBanner';
import banner from "../../assets/shop/banner2.jpg"
import useMenu from '../../Hooks/useMenu';
import RecommendedCard from '../Home/Recommended/RecommendedCard';
import { useParams } from "react-router";
const OurShop = () => {
    const [menu] = useMenu();
    const [activeTab, setActiveTab] = useState("");
    const { category } = useParams();

    useEffect(() => {
        if(category){
            setActiveTab(category)
        }
        else{
            setActiveTab("pizza")
        }
    }, [])

    const menuShop = menu.filter(mainMenu => mainMenu.category == activeTab);

    return (
        <section>
            <PageBanner
                img={banner}
                title="Our Shop"
                description="Would you like to try a dish?"
            ></PageBanner>

            <div className='my-10 text-center space-x-6 text-xl brandTitle font-bold'>
                <button className={` ${activeTab == "pizza" ? "text-[#BB8506] border-[#BB8506] border-b-2" : ""}`} onClick={() => setActiveTab("pizza")}>Pizza</button>
                <button className={` ${activeTab == "salad" ? "text-[#BB8506] border-[#BB8506] border-b-2" : ""}`} onClick={() => setActiveTab("salad")}>Salad</button>
                <button className={` ${activeTab == "soup" ? "text-[#BB8506] border-[#BB8506] border-b-2" : ""}`} onClick={() => setActiveTab("soup")}>Soup</button>
                <button className={` ${activeTab == "appetizer" ? "text-[#BB8506] border-[#BB8506] border-b-2" : ""}`} onClick={() => setActiveTab("appetizer")}>Appetizer</button>
                <button className={` ${activeTab == "mainCourse" ? "text-[#BB8506] border-[#BB8506] border-b-2" : ""}`} onClick={() => setActiveTab("mainCourse")}>Main Course</button>
            </div>

            <div className='flex items-center justify-center'>
                <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        menuShop.map(recommendedMenu => <RecommendedCard
                            key={recommendedMenu._id}
                            recommendedMenu={recommendedMenu}
                        ></RecommendedCard>)
                    }
                </div>
            </div>

        </section>
    );
};

export default OurShop;