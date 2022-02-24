import React from 'react';
import { logout } from '../utils';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();

   const handleLogout=()=>{
        logout();
        navigate("/");
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => handleLogout()}>Click here to log out</button>
        </div>
    );
};

export default Dashboard;