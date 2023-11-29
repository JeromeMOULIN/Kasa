import React, { useEffect, useState } from 'react';

import './star.css'

const Star = (nbrRating) => {
    // const [fullStar, setFullStar] = useState([])
    // const [emptyStar, setEmptyStar] = useState([])

    let FullStar = Array(5).fill(<i className="fa-solid fa-star" />).slice(5 - nbrRating.nbrRating)
    let EmptyStar = Array(5).fill(<i className="fa-solid fa-star grey" />).slice(nbrRating.nbrRating)
    let star = FullStar.concat(EmptyStar)

    // useEffect(() => {
    //     let i = nbrRating.nbrRating

    //     setFullStar(Array(5).fill(<i key={2} className="fa-solid fa-star" />).slice(5 - nbrRating.nbrRating))
    //     setEmptyStar(Array(5).fill(<i key={3} className="fa-solid fa-star grey" />).slice(nbrRating.nbrRating))
    // }, [])

    // <i className="fa-solid fa-star "/>
    // <i className="fa-solid fa-star grey"/>

    return (
        <div className='stars'>
            {star}
        </div>
    );
};

export default Star;