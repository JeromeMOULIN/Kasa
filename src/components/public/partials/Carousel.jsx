import React, { useEffect, useState } from 'react';

import './carousel.css'

const Carousel = (listCarousel) => {
    const [currentIndex, setCurrentIndex] = useState([])

    useEffect(() => {
        setCurrentIndex(0)
    }, [])

    listCarousel = listCarousel.listCarousel

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

    return (
        <section className='carousel'>
            <i onClick={onLeft} className="arrow fa-solid fa-chevron-left fa-2xl"></i>
            <img className='imgcarousel' src={listCarousel[currentIndex]} alt="x" />
            <i onClick={onRight} className="arrow fa-solid fa-chevron-right fa-2xl"></i>
        </section>
    );
};

export default Carousel;