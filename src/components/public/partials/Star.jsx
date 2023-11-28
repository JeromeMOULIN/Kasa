import React, { useEffect, useState } from 'react';

import './star.css'

const Star = (nbrStar) => {
    const [star, setStar] = useState([])
    const [emptyStar, setEmptyStar] = useState([])

    useEffect(() =>{
        setStar(Array(2).fill(<i className="fa-solid fa-star"/>))
        setEmptyStar(Array(3).fill(<i className="fa-solid fa-star grey"/>))
    }, [])
    
    // <i className="fa-solid fa-star "/>
    // <i className="fa-solid fa-star grey"/>

    return (
        <div className='stars'>
         {star}{emptyStar}
        </div>
    );
};

export default Star;