import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';

const Home = () => {
        return (
            <div>
                <h1>Home</h1>
                 <Link to="/signin">Go to sign in page</Link>
            </div>
        );
}

export default Home;