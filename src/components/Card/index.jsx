import React from "react";
import { PropTypes } from "prop-types";


const Card = ({ title, cover }) => {
    
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-img" />
            <div className="card-title">
            <p>{title}</p>
            </div>
        </div>
    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};
Card.defaultProps = {
    title: '',
    cover: '',
}

export default Card