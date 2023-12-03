import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logements from '@back/logement.json';
import Dropdown from '@components/public/partials/Dropdown';
import Star from '@components/public/partials/star';
import Carousel from '@components/public/partials/Carousel';

import './logement.css';

const Logement = () => {
    //setting des differents State
    const [logement, setLogement] = useState([])
    const [host, setHost] = useState([])
    const [carousel, setCarousel] = useState([])
    const [tags, setTags] = useState([])
    const [equipments, setEquipements] = useState([])

    const { logementId } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        const dataLogement = Logements.find((logement) => logement.id == logementId)
        // si l'id du logement n'est pas connu alors renovi a la page error
        if(!dataLogement){
            navigate('/error')
        }
        
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

                    <div className='whoContent'>
                        <div className='Who'>
                            <div className='host'>
                                <p>{host.name}</p>
                                <img src={host.picture} alt={host.name} />
                            </div>
                            <Star nbrRating={logement.rating} />

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