import React from 'react';
import HomeButton from '../components/HomeButton';

export default function NoMatch() {
    return (
        <div className='no-match'>
            <div>
                <h3>Sorry, no match for this page</h3>
                <HomeButton />
            </div>
        </div>
    );
}
