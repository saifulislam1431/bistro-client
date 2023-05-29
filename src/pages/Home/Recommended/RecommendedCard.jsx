import React, { useContext } from 'react';
import { UserAuth } from '../../../Auth/Auth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const RecommendedCard = ({recommendedMenu}) => {
    const{cookingMethod,recipeName,recipeImg}= recommendedMenu;
    const {user} = useContext(UserAuth);
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch] = useCart();


    const handleCart=(item)=>{
      const{recipeName,recipeImg,price,category}= item;
      const addedItem = {
        recipeName,
        recipeImg,
        price,
        category,
        email : user.email,
        userName : user.displayName
        
      }
      if(user && user?.email){
        fetch("http://localhost:5000/carts",{
          method:"POST",
          headers:{
            "content-type" : "application/json"
          },
          body: JSON.stringify(addedItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              title: 'Success!',
              text: 'Item added successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please Login First.',
          text: "If you want to add this item in your cart please login!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: 'myBtn',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login" , {state:{from: location}})
          }
        })
      }
    }



    return (
<div className="card w-80 bg-base-100 shadow-xl">
  <figure className="px-2 pt-2">
    <img src={recipeImg} alt="Shoes" className="rounded-lg h-60 w-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="brandTitle font-medium text-lg h-[55px]">{recipeName}</h2>
    <p>{cookingMethod.slice(0,50)}...</p>
    <div className="card-actions">
      <button onClick={()=>handleCart(recommendedMenu)} className=" mt-2 px-5 py-1 border-b-2 border-[#BB8506] text-[#BB8506] rounded-lg bg-slate-200 hover:bg-[#1F2937]">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default RecommendedCard;