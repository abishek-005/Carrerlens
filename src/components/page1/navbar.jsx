import React from 'react';
import '.page1/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-fixed">
            <div className="navbar-logo">CareerLens</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#how it works">How it works</a></li>
                <li><a href="#profile">Profile</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
