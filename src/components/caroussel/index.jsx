import React, { useState } from "react";
import { PropTypes } from 'prop-types';
import forward from '../../assets/forward.png';
import backward from '../../assets/backward.png';
import '../../utils/style/caroussel.scss'

const Caroussel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const shaowArrows = pictures.length > 1;
    const showNumbering = pictures.length > 1;

    return (
        <div className="caroussel">
        
            {shaowArrows && (           
                <button className="right"> <img
                src={backward}
                alt="précédent"
                onClick={goToPrevious}
                style={{ cursor: "pointer" }}
                />
                </button>
            )}

            <img className="caroussel-img" src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

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

Caroussel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Caroussel