import React from 'react';
import './Icon.css'

const Icon = (props) => {
    const iconName = props.iconName
    return (
            <img src={process.env.PUBLIC_URL + '/icons/' + iconName} className="icons" alt={iconName} />
    );
};

export default Icon;