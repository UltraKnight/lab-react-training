import React from 'react';
// import PropTypes from 'prop-types';
import './BoxColor.css';

const minMaxValue = (props, propName, _componentName) => {
    const MIN = 0;
    const MAX = 255;

    if(props[propName] < MIN || props[propName] > MAX) {
        return new Error('Value must be between 0 and 255');
    }
}

const rgbToHex = (r, g, b) => {
    let rHex = r.toString(16);
    let gHex = g.toString(16);
    let bHex = b.toString(16);

    rHex = rHex.length === 1 ? `0${rHex}` : rHex;
    gHex = gHex.length === 1 ? `0${gHex}` : gHex;
    bHex = bHex.length === 1 ? `0${bHex}` : bHex;

    return `#${rHex}${gHex}${bHex}`;
}

const BoxColor = ({r, g, b}) => {
    const color = {backgroundColor: `rgb(${r}, ${g}, ${b})`};

    return(
        <div className="BoxColor" style={color}>
            <h3>rgb({r}, {g}, {b})</h3>
            <h3>{rgbToHex(r, g, b)}</h3>
        </div>
    );
}

BoxColor.propTypes = {
    r: minMaxValue,
    g: minMaxValue,
    b: minMaxValue
};

export default BoxColor;