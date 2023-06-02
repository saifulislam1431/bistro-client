import React, {useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../Auth/Auth';
import Loading from '../pages/Loading/Loading';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user , loading} = useContext(UserAuth);
    if(user){
        return children;
    }
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        Swal.fire({
            title: 'Error!',
            text: 'Please Login first',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        return <Navigate to="/login" state={{from : location}} replace />
    }
};

export default PrivateRoute;