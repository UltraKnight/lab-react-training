import React from 'react';
import PropTypes from 'prop-types';
import './CreditCard.css';

const CreditCard = ({type, number, expirationMonth, expirationYear,
    bank, owner, bgColor, color}) => {
    const imgURL = type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';
    const month = expirationMonth < 9 ? `0${expirationMonth}` : expirationMonth.toString();
    return(
        <div className="CreditCard" style={{backgroundColor: bgColor, color: color}}>
            <img src={imgURL} alt="type" width="40" />
            <h2>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;&nbsp;
                {number.substring(number.length - 4)}</h2>
            <p><span>Expires {month}/{expirationYear.toString().substring(2)}</span>{bank}</p>
            <p className="self-top">{owner}</p>
        </div>
    );
}

CreditCard.propTypes = {
    type: PropTypes.oneOf(['Visa', 'Master Card']).isRequired,
    number: PropTypes.string.isRequired,
    expirationMonth: PropTypes.number.isRequired,
    expirationYear: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default CreditCard;