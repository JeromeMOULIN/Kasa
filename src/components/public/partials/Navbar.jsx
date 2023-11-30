import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to='/'>Acceuil</NavLink></li>
                <li><NavLink to='/about'>A Propos</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;