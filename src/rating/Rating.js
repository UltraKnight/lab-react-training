import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

const minMaxValue = (props, propName, _componentName) => {
    const MIN = 0.0;
    const MAX = 5.0;

    if(props[propName] < MIN || props[propName] > MAX) {
        return new Error('Value must be between 0.0 and 5.0');
    }
}

const Rating = ({children, isLight}) => {
    let rating = children < 0 || children > 5 ? 0 : children;
    
    return(
        <React.Fragment>
            <p style={{'--rating': rating}} className={isLight ? 'Rating light' : 'Rating'}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        </React.Fragment>
    );
}

Rating.propTypes = {
    children: minMaxValue,
    isLight: PropTypes.bool
};

export default Rating;