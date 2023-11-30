

import { useEffect, useState } from 'react';
import './star.css'

const Star = (props) => {

    let FullStar = Array.from(Array(5), (_, i) => <i key={i} className="fa-solid fa-star" />).slice(5 - props.nbrRating)
    let EmptyStar = Array.from(Array(5), (_,i) => <i key={i+10} className="fa-solid fa-star grey" />).slice(props.nbrRating)
    let star = FullStar.concat(EmptyStar)


    return (
        <div className='stars'>
            {star}
        </div>
    );
};

export default Star;