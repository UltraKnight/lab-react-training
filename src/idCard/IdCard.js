import React from 'react';
import PropTypes from 'prop-types';
import './IdCard.css';

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return(
        <div className="IdCard">
            <div>
                <img src={picture} alt={picture} />
            </div>
            <div>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birth.toLocaleDateString()}</p>
            </div>
        </div>
    );
}

IdCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']),
    height: PropTypes.number,
    birth: PropTypes.instanceOf(Date),
    picture: PropTypes.string
};

export default IdCard;