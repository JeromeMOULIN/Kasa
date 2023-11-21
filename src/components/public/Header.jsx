import React from 'react';
import Navbar from './partials/Navbar';
import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
    return (
        <header className='header'>

            <Link className='navImg'>
                <img src="src\components\_utils\LOGOkasa.png" alt="mer agitée sur falaise rocailleuse"/>
            </Link>

            <Navbar/>
        </header>
    );
}; 

export default Header;