import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logements from '@back/logement.json';

import './logement.css';

const Logement = () => {
    const [logement, setLogement] = useState([])
    const [host, setHost] = useState([])
    const [carousel, setCarousel] = useState([])
    const [tags, setTags] = useState([])

    const { logementId } = useParams()

    useEffect(() => {
        const dataLogement = Logements.find((logement) => logement.id == logementId)
        setLogement(dataLogement)
        setHost(dataLogement.host)
        setCarousel(dataLogement.pictures)
        setTags(dataLogement.tags)
    }, [])

    return (
        <div className='logement'>
            <section className='carousel'>
                <i className="arrow fa-solid fa-chevron-left fa-2xl"></i>
                <img src={carousel[0]} alt="" />
                <i className="arrow fa-solid fa-chevron-right fa-2xl"></i>
            </section>
            <section className='mainContent'>

                <div className='headerContent'>
                    <div className='information'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        <div key={logement.tag} className='tags'>
                            {
                                tags.map(tag => {
                                    return (
                                        <p key={tag}>{tag}</p>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <div className='Who'>
                            <div className='host'>
                                <p>{host.name}</p>
                                <img src={host.picture} alt={host.name} />
                            </div>
                            {logement.rating}
                        </div>
                    </div>
                </div>

                <div className='dropInformation'>

                </div>

            </section>
        </div>
    );
};

export default Logement;