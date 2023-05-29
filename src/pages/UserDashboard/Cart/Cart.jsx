import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart, refetch] = useCart();
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

            }
            fetch(`http://localhost:5000/carts/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        })
    }

    const total = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <section>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='my-6 lg:my-10'>
                <SectionComponent
                    subHeading="My Cart"
                    heading="Wanna add more?"
                ></SectionComponent>
            </div>
            <div className='w-full'>
                <div className='my-7 w-full flex flex-col md:flex-row items-center justify-evenly gap-3 md:gap-5 lg:gap-20 uppercase font-bold text-lg brandTitle'>
                    <h1>Total orders: {cart.length}</h1>
                    <h1>total price: $ {total}</h1>
                    <button className='px-4 py-1 rounded-md bg-[#D1A054] text-white'>Pay</button>
                </div>

                <div>

                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.recipeImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='font-bold brandTitle'>
                                            {item.recipeName}
                                        </td>
                                        <td className='font-semibold text-right'>
                                            $ {item.price}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="bg-red-700 text-right px-4 py-1 rounded-md"><FaTrashAlt className='h-6 w-6 text-white' /></button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cart;