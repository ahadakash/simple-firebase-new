import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/login">Login</Link>
        </div>
    );
};

export default Header;