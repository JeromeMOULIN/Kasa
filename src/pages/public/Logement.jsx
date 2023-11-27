import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logements from '@back/logement.json';
import Dropdown from '@components/public/partials/Dropdown';

import './logement.css';

const Logement = () => {
    const [logement, setLogement] = useState([])
    const [host, setHost] = useState([])
    const [carousel, setCarousel] = useState([])
    const [tags, setTags] = useState([])
    const [equipments, setEquipements] = useState([])
    const [currentIndex, setCurrentIndex] = useState([])

    const { logementId } = useParams()

    useEffect(() => {
        const dataLogement = Logements.find((logement) => logement.id == logementId)
        setLogement(dataLogement)
        setHost(dataLogement.host)
        setCarousel(dataLogement.pictures)
        setTags(dataLogement.tags)
        setEquipements(dataLogement.equipments)
        setCurrentIndex(0)
    }, [])


    const onLeft = () => {
        if (currentIndex <= 0) {
            setCurrentIndex(carousel.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
            console.log(currentIndex)
        }
    }

    const onRight = () => {
        if (currentIndex >= carousel.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
            console.log(currentIndex)
        }
    }
    return (
        <div className='logement'>
            <section className='carousel'>
                <i onClick={onLeft} className="arrow fa-solid fa-chevron-left fa-2xl"></i>
                <img className='imgcarousel' src={carousel[currentIndex]} alt="" />
                <i onClick={onRight} className="arrow fa-solid fa-chevron-right fa-2xl"></i>
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