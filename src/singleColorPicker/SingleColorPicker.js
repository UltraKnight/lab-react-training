import React from 'react';
import './SingleColorPicker.css';

export default function SingleColorPicker({color, value, onChange}) {
    let rgb = '';
    switch(color) {
        case 'g':
            rgb = `rgb(0, ${value}, 0)`;
            break;
        case 'b':
            rgb = `rgb(0, 0, ${value})`;
            break;
        default:
            rgb = `rgb(${value}, 0, 0)`;
            
    }
    return (
        <div className='SingleColorPicker'>
            <div className='colorBox' style={{backgroundColor: rgb}}></div>
            <label htmlFor={color}>{color.toUpperCase()}:</label>
            <input id={color} name={color+'Value'} type="number" min='0' max='255' value={value} onChange={onChange} />
        </div>
    )
}

SingleColorPicker.defaultProps = {
    value: 0,
    color: ''
}