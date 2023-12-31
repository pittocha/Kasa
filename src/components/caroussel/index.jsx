import React, { useState } from "react";
import { PropTypes } from 'prop-types';
import forward from '../../assets/forward.png';
import backward from '../../assets/backward.png';

const Caroussel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pictures.length - 1));
    };

    return (
        <div>
            {currentIndex !== 0 && (
                <button> <img
                src={backward}
                alt="précédent"
                onClick={goToPrevious}
                style={{ cursor: "pointer" }}
                />
                </button>
            )}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            {currentIndex !== pictures.length - 1 && (
                <button> <img
                src={forward}
                alt="suivant"
                onClick={goToNext}
                style={{ cursor: "pointer" }}
                />
                </button>
            )}
        </div>
    )
}

Caroussel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Caroussel