import React from 'react';
import { UserAuth } from '../Auth/Auth';
import useAdmin from '../Hooks/useAdmin';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(UserAuth);
    const [isAdmin, isAdminLoading] = useAdmin();
    const navigate = useNavigate()
    if (loading && isAdminLoading) {
        return <progress className="progress progress-primary w-96"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return navigate("/")
};

export default AdminRoute;