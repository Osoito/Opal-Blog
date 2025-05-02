import React from 'react';
import '../css/home.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <img src="./img/logo.png" className="logo" alt="Logo" /> */}
            <ul className="links-container">
                <li className="link-item"><a href="/" className="link">home</a></li>
                <li className="link-item"><a href="/editor" className="link">editor</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;