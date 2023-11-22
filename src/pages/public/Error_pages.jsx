import React from 'react';

import './error_pages.css'
import { Link } from 'react-router-dom';

const Error_pages = () => {
    return (
        <div className='error_pages'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'acceuil</Link>
        </div>
    );
};

export default Error_pages;