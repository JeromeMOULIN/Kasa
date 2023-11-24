import React from 'react';
import Navbar from './partials/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../_utils/LOGOkasa.png'

import './header.css'

const Header = () => {

    return (
        <header className='header'>

            <Link className='navImg'  to='/'>
                <img src={Logo} alt="mer agitée sur falaise rocailleuse"/>
            </Link>

            <Navbar/>
        </header>
    );
}; 

export default Header;