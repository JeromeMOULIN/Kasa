import React from 'react';

import './about.css'
import Dropdown from '../../components/public/partials/Dropdown';


const About = () => {

    return (


        <div className='about'>
            <div className='heroHeader'>
                <img src="src/_utils/fond_foret_montagne.svg" alt="image de plaine avec gorge montatgneuse " />
            </div>

            <Dropdown title='Fiabilité'>
                <p className="droptext">
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </Dropdown>

            <Dropdown title='Respect'>
                <p className="droptext">
                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.
                </p>
            </Dropdown>

            <Dropdown title='Service'>
                <p className="droptext">
                    Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes au logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </Dropdown>

            <Dropdown title='Sécurité'>
                <p className='droptext'>
                    La sécurité est la priorité de Kasa.
                    Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspont aux critère de sécurité établis par
                    nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous roganisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </Dropdown>
      

            

            
        </div>
    );


};



export default About;