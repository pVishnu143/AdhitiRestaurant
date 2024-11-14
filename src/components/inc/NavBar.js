import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false); 

    const handleMenuClick = () => {
        setMenuOpen(prevState => !prevState); 
    }

    return (
        <nav>
            <h1 className="title">
            <NavLink to="/home">  <img src='/images/logo.jpeg' alt='chef'/></NavLink>
            </h1>
            <div className="menu" onClick={handleMenuClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Menu">Menu</NavLink></li>
                <li><NavLink to="/Orders">Orders</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
