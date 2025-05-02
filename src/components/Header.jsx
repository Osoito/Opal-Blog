import React from 'react';
import '../css/Header.css'; // Ensure you have the correct path to your CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="content">
                <h1 className="heading">
                    <span className="small">Opal Blog</span>
                </h1>
                <a href="/editor" className="btn">write new article</a>
            </div>
        </header>
    );
};

export default Header;