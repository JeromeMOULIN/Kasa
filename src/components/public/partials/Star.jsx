

import { useEffect, useState } from 'react';
import './star.css'

const Star = (props) => {
    // Set des variables rempli d'etoile grise ou de couleur que l'on coupe a la taille
    //  voulu et on les assembles pour crée un seul array
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