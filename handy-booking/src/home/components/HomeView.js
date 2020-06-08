import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';   

const HomeView = () => {
    return (
        <div>
            <NavigationBar />
            This is homeview
            <p><Link to ="/signup/user">UserSignUp</Link></p>
            <p><Link to ="/tradies">TradiePage</Link></p>
            <p><Link to ="/users">UserPage</Link></p>
            <p><Link to ="/tradies">TradieSignUp</Link></p>
            <p><Link to ="/orders">OrderPage</Link></p>
        </div>
    )
};

export default HomeView;