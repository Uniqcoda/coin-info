import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function HomeButton() {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <button type='button' style={{cursor: "pointer"}} onClick={handleClick}>
            Home {'  '}
            <FontAwesomeIcon icon={faHome} />
        </button>
    );
}
