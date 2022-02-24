import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../utils';
export const PublicRoute = ({ component: RouteComponent, restricted }) => {
  
    if (isLogin() && restricted) {
      return <Navigate to="/dashboard" />
    }  
    return <RouteComponent />
  }
export default PublicRoute;

