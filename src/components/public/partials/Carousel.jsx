import React, { useEffect, useState } from 'react';

import './carousel.css'

const Carousel = ({ listCarousel }) => {
    const [currentIndex, setCurrentIndex] = useState([])
    //initialisation des variable qui contiendrons les fleches
    let leftArrow 
    let rightArrow 

    
    useEffect(() => {
        // setting de l'index qui servira au carousel à 0
        setCurrentIndex(0)
    }, []);

    // Fonction qui permet la décrementation de l'index du carousel
    const onLeft = () => {
        if (currentIndex <= 0) {
            setCurrentIndex(listCarousel.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    // Fonction qui permet l'incrémentation de l'index du carousel
    const onRight = () => {
        if (currentIndex >= listCarousel.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    // Condition qui permet d'afficher ou non les fleches du carousel en fonction de la longeur
    // de la list d'image a afficher.
    if(listCarousel.length > 1){
        rightArrow = <i onClick={onLeft} className="arrow fa-solid fa-chevron-left fa-2xl"></i>;
        leftArrow = <i onClick={onRight} className="arrow fa-solid fa-chevron-right fa-2xl"></i>;
    }

    return (
        <section className='carousel'>
        
            {leftArrow}    
            <img className='imgcarousel' src={listCarousel[currentIndex]} alt="photo du logement" />
            <p className='order'>{currentIndex + 1}/{listCarousel.length}</p>
            {rightArrow}

        </section>
    );
};

export default Carousel;