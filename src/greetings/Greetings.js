import React from 'react';
import PropTypes from 'prop-types';
import './Greetings.css';

const Greetings = ({lang, children}) => {
    let hello = 'Hello'; //en
    switch(lang) {
        case 'de':
            hello = 'Hallo';
            break;
        
        case 'es':
            hello = 'Hola';
            break;
        
        case 'fr':
            hello = 'Bonjour';
            break;
        default:
            hello = 'Hello';
    }
    return(
        <div className="Greetings">
            <h2>{hello} {children}</h2>
        </div>
    );
}

Greetings.propTypes = {
    lang: PropTypes.oneOf(['de', 'en', 'es', 'fr']),
    children: PropTypes.string
};

export default Greetings;