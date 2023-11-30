import React, { useEffect, useState } from 'react';

import './carousel.css'

const Carousel = ({listCarousel}) => {
    const [currentIndex, setCurrentIndex] = useState([])
    const [leftArrow, setLeftArrow] = useState([])
    const [rightArrow, setRightArrow] = useState([])
    

    useEffect(() => {
        setCurrentIndex(0)
        if(listCarousel.length > 1){
            setLeftArrow(<i onClick={onLeft} className="arrow fa-solid fa-chevron-left fa-2xl"></i>)
            setRightArrow(<i onClick={onRight} className="arrow fa-solid fa-chevron-right fa-2xl"></i>)
        }
    }, [])

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
            {leftArrow}
            <img className='imgcarousel' src={listCarousel[currentIndex]} alt="x" />
            <div className='order'><span>{currentIndex +1}</span>/<span>{listCarousel.length}</span></div>
            {rightArrow}
        </section>
    );
};

export default Carousel;