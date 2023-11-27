import React from 'react';

import './dropdown.css'

const Dropdown = (props) => {
    //ouverture et fermeture des menu dropdown
    let openDropDown = (e) => {
        e.target.parentElement.parentElement.nextSibling.classList.toggle('show')
        e.target.parentElement.classList.toggle('rotate')
    }

    return (
        <div className='dropdown'>
            <div className='btndown'>{props.title}<span className='chevronDropDown' onClick={openDropDown}><i className="fa-solid fa-chevron-up fa-xl"></i></span></div>
            {props.children}
        </div>
    );
};

export default Dropdown;