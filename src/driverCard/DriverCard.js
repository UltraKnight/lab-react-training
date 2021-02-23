import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import './DriverCard.css';

const DriverCard = ({name, rating, img, car}) => {
    return(
        <div className="DriverCard">
            <div className="pic" style={{backgroundImage: 'url('+img+')'}}></div>
            <div>
                <h2>{name}</h2>
                <Rating isLight>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}

DriverCard.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    img: PropTypes.string,
    car: PropTypes.object
};

export default DriverCard;