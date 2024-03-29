import React, { useState } from "react";
import { PropTypes } from 'prop-types';
import forward from '../../assets/forward.png';
import backward from '../../assets/backward.png';
import '../../utils/style/caroussel.scss'

const Caroussel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    //objet qui détermine le comportement de la flèche précédent
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };
    //objetqui détermine le comportement de la flèche suivant
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
    

    const shaowArrows = pictures.length > 1;//objet pour masquer les flèches si il n'y à qu'une photo
    const showNumbering = pictures.length > 1;//objet pour masquer le compteur d'image si il n'y à qu'une photo

    return (
        <div className="caroussel">
        
            {shaowArrows && (           
                <button className="right"> <img
                src={backward}
                alt="précédent"
                onClick={goToPrevious}
                style={{ cursor: "pointer"}}
                />
                </button>
            )}
            <img 
                className="caroussel-img" 
                src={pictures[currentIndex]} 
                alt={`Slide ${currentIndex + 1}`}
            />
            {shaowArrows && (           
                <button className="left"> <img
                src={forward}
                alt="suivant"
                onClick={goToNext}
                style={{ cursor: "pointer" }}
                />
                </button>
            )}
            {showNumbering && (
            <div className="counter">
                {currentIndex + 1}/{pictures.length}
            </div>
            )}
        </div>
    )
}
//utilisation de proptypes pour les images du caroussel
Caroussel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Caroussel