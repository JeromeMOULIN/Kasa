import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logements from '@back/logement.json';
import Dropdown from '@components/public/partials/Dropdown';
import Star from '@components/public/partials/star';
import Carousel from '@components/public/partials/Carousel';

import './logement.css';

const Logement = () => {
    const [logement, setLogement] = useState([])
    const [host, setHost] = useState([])
    const [carousel, setCarousel] = useState([])
    const [tags, setTags] = useState([])
    const [equipments, setEquipements] = useState([])

    const { logementId } = useParams()

    useEffect(() => {
        const dataLogement = Logements.find((logement) => logement.id == logementId)
        setLogement(dataLogement)
        setHost(dataLogement.host)
        setCarousel(dataLogement.pictures)
        setTags(dataLogement.tags)
        setEquipements(dataLogement.equipments)

    }, [])

    return (
        <div className='logement'>

            <Carousel listCarousel={carousel} />

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
                            <Star nbrStar={logement.rating} />

                        </div>
                    </div>
                </div>

                <div className='dropInformation'>
                    <Dropdown title='Description'>
                        <p className="droptext">
                            {logement.description}
                        </p>
                    </Dropdown>
                    <Dropdown title='Equipement'>
                        <ul className='droptext'>
                            {
                                equipments.map(equipment => {
                                    return (
                                        <li key={equipment}>{equipment}</li>
                                    )
                                })
                            }
                        </ul>
                    </Dropdown>
                </div>
            </section>
        </div>
    );
};

export default Logement;