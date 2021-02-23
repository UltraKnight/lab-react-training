import React from 'react';
import PropTypes from 'prop-types';
import './Random.css';

const Random = ({min, max}) => {
    let value = Math.floor(Math.random() * (max + 1 - min) + min);
    return(
        <div className="Greetings">
            <h2>Random value between {min} and {max} =&gt; {value}</h2>
        </div>
    );
}

Random.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
};

export default Random;