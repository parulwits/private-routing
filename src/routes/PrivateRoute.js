import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils';
export const PrivateRoute = ({ component: RouteComponent }) => {
  
    if (isLogin()) {
      return <RouteComponent />
    }  
    return <Navigate to="/signin" />
  }
export default PrivateRoute;