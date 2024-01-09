import React from "react";
import { PropTypes } from "prop-types";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
    //arrondir à la valeur entière
    const roundedRating = Math.round(rating);
    //étoiles active
    const activeStars = Array.from({ length: roundedRating }, (_, index) => (
        <FaStar key={index} color="#FF6060" />
    ));
    //étoiles inactive
    const inactiveStars = Array.from({ length: 5 - roundedRating }, (_, index) => (
        <FaStar key={index} color="#D3D3D3" />
    ));

    return (
        <div  className="rating">
            {activeStars}
            {inactiveStars}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default Rating