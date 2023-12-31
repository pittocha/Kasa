import React from 'react';
import PropTypes from 'prop-types';
import '../../utils/style/banner.scss';


const Banner = ({imageUrl, title}) => {

    return (
        <div className='banner'>
            <img src={imageUrl} className='banner-img' alt='bannière' />
            <div className='banner-title'>{title}</div>
        </div>
        )
}

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Banner