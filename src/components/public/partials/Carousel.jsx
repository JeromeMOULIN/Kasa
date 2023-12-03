import React, { useEffect, useState } from 'react';

import './carousel.css'

const Carousel = ({ listCarousel }) => {
    const [currentIndex, setCurrentIndex] = useState([])

    let leftArrow 
    let rightArrow 

    
    useEffect(() => {
        setCurrentIndex(0)
    }, []);

    const onLeft = () => {
        if (currentIndex <= 0) {
            setCurrentIndex(listCarousel.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const onRight = () => {
        if (currentIndex >= listCarousel.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

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