import React from 'react';

const RecommendedCard = ({recommendedMenu}) => {
    const{cookingMethod,recipeName,recipeImg}= recommendedMenu;
    return (
<div className="card w-80 bg-base-100 shadow-xl">
  <figure className="px-2 pt-2">
    <img src={recipeImg} alt="Shoes" className="rounded-lg h-60 w-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="brandTitle font-medium text-lg h-[55px]">{recipeName}</h2>
    <p>{cookingMethod.slice(0,50)}...</p>
    <div className="card-actions">
      <button className=" mt-2 px-5 py-1 border-b-2 border-[#BB8506] text-[#BB8506] rounded-lg bg-slate-200 hover:bg-[#1F2937]">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default RecommendedCard;