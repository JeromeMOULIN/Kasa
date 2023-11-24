import React from 'react';
import Logements from '@back/logement.json'
import { Link } from 'react-router-dom';

import './home.css'

const Home = () => {

    return (
        <div className='home'>

            {/* baniere */}
            <section className='heroHeader'>
                <img src="src/_utils/fond_mer_rocheux.svg" alt="" />
                <h1>Chez vous, partout et ailleurs</h1>
            </section>

            {/* content logement */}
            <section className='logements'>
                    {
                        Logements.map(logement => {
                            return (
                                <figure className='logementCard' key={logement.id} id={logement.id}>
                                    <Link to={`logement/${logement.id}`}>
                                        <img className='thumbnail' src={logement.cover} alt={logement.description} />
                                        <figcaption className='figTitle'>{logement.title}</figcaption>
                                    </Link>
                                </figure>
                            )
                        })
                    }
                
            </section>
        </div>
    );
};

export default Home;