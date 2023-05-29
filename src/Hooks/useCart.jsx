import React, {useContext} from 'react';
import { useQuery } from '@tanstack/react-query'

const useCart = () => {
    const {user} = useContext(UserAuth);
    const { isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts' , user?.email ],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email:${user.email}`)
            return res.json();
        }
      })
      return [ isLoading , cart]
};

export default useCart;