import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><Link to='/'>Acceuil</Link></li>
                <li><Link to='/'>A Propos</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;