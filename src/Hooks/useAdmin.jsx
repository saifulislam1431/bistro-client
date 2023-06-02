import React, { useContext } from 'react';
import { UserAuth } from '../Auth/Auth';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useContext(UserAuth);
    const { data: isAdmin = {}, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
                }
            })
            return res.json()
            // const data = res.json();
            // console.log(data.isAdmin);
        }
    })



    return [isAdmin, isAdminLoading]
};

export default useAdmin;