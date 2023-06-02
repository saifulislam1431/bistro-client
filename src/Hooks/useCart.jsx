import React, { useContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query'
import { UserAuth } from '../Auth/Auth';

const useCart = () => {
    const { user, loading } = useContext(UserAuth);
    // const token = localStorage.getItem("access-token")
    // console.log(token);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
                }
            })

            return res.json();
        }
    })



    return [cart, refetch]
};

export default useCart;