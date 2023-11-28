import React, { useEffect, useState } from 'react';

import './star.css'

const Star = (nbrStar) => {
    const [star, setStar] = useState([])
    const [emptyStar, setEmptyStar] = useState([])

    const i = nbrStar.nbrStar

    useEffect(() =>{
        console.log(i)
        setStar(Array(4).fill(<i className="fa-solid fa-star "/>))
        setEmptyStar(Array(1).fill(<i className="fa-solid fa-star grey"/>))
    }, [])
    
    // <i className="fa-solid fa-star "/>
    // <i className="fa-solid fa-star grey"/>

    return (
        <div className='star'>
         {star}{emptyStar}
        </div>
    );
};

export default Star;