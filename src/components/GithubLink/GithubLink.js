import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GithubLink = () => {
    return (
        <div className = 'g'>
            <FontAwesomeIcon icon = {faGithub} />Github
        </div>
    )
}

export default GithubLink
