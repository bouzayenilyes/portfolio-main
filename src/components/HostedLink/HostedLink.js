import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HostedLink = () => {
    return (
        <div className = 'h'>
           <FontAwesomeIcon icon = {faGlobe} /> Hosted
        </div>
    )
}

export default HostedLink
