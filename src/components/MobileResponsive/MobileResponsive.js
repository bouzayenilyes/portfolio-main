import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MobileResponsive = () => {
    return (
        <div className = 'm'>
            <FontAwesomeIcon icon = {faMobile}/>  Mobile Resposive
        </div>
    )
}

export default MobileResponsive
