import React from 'react';
import WLogo from '../../_utils/LOGOwhite.png'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={WLogo} alt="logo Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;