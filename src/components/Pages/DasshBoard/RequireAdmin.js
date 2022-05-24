import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';

const RequireAdmin = ({children}) => {
    const [admin] = useAdmin();
    const location = useLocation();
  
    if (!admin) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
  
    return children;
};

export default RequireAdmin;