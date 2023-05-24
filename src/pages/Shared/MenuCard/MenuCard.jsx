import React from 'react';

const MenuCard = ({menu}) => {
    const{cookingMethod,recipeName,price,recipeImg}= menu;
    return (
<section className='my-10'>
<div className='flex items-center justify-center gap-4'>
    <img src={recipeImg} alt="Image" className='w-20 h-20 rounded-r-full rounded-b-full'/>
    <div>
        <p className='brandTitle font-medium text-lg'>{recipeName}</p>
        <p>{cookingMethod.slice(0,80)}...</p>
    </div>
    <p className='text-[#BB8506]'> ${price}.00</p>
</div>
</section>
    );
};

export default MenuCard;