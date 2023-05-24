import React, { useEffect, useState } from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import RecommendedCard from './RecommendedCard';

const Recommended = () => {
    const[recommended , setRecommended] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>{
            const recommendedMenu = data.filter(recommend=> recommend.category == "recommended")
            setRecommended(recommendedMenu)
        })
    },[])
    return (
        <section className='my-14'>
            <SectionComponent
            heading="CHEF RECOMMENDS"
            subHeading="Should Try"
            ></SectionComponent>

<div className='flex items-center justify-center my-10'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{
    recommended.map(recommendedMenu=><RecommendedCard
    key={recommendedMenu._id}
    recommendedMenu={recommendedMenu}
    ></RecommendedCard>)
}    
</div>            
</div>
        </section>
    );
};

export default Recommended;