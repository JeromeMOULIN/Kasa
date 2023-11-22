import React from 'react';

import './about.css'


const About = () => {


    //ouverture et fermeture des menu dropdown
    let openDropDown = (e) => {
        e.target.parentElement.parentElement.nextSibling.classList.toggle('show')
        e.target.parentElement.classList.toggle('rotate')
    }

    return (


        <div className='about'>
            <div className='heroHeader'>
                <img src="src\components\_utils\fond_foret_montagne.svg" alt="" />
            </div>

            <div className='dropdown'>
                <div className='btndown'>Fiabilité <span className='chevronDropDown' onClick={openDropDown}><i className="fa-solid fa-chevron-up fa-xl"></i></span></div>
                <p className='droptext'>
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </div>

            <div className='dropdown'>
                <div className='btndown'>Respect<span className='chevronDropDown' onClick={openDropDown}><i className="fa-solid fa-chevron-up fa-xl"></i></span></div>
                <p className='droptext'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.
                </p>
            </div>

            <div className='dropdown'>
                <div className='btndown'>Service<span className='chevronDropDown' onClick={openDropDown}><i className="fa-solid fa-chevron-up fa-xl"></i></span></div>
                <p className='droptext'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.
                </p>
            </div>

            <div className='dropdown'>
                <div className='btndown'>Sécurité<span className='chevronDropDown' onClick={openDropDown}><i className="fa-solid fa-chevron-up fa-xl"></i></span></div>
                <p className='droptext'>
                    La sécurité est la priorité de Kasa.
                    Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspont aux critère de sécurité établis par
                    nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous roganisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </div>
        </div>
    );


};



export default About;