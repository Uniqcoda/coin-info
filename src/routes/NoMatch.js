import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NoMatch() {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/');
    }

    return (
        <div className='no-match'>
            <h3>Sorry, no match for this page</h3>
            <button type='button' onClick={handleClick}>
                Go home
            </button>
        </div>
    );
}
