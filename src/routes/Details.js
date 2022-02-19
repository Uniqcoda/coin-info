import React from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
    let { coinId } = useParams();

    function getCoin(coinId) {
        // return coins.find((coin) => coin.id === coinId)
    }

    return <div className='cryptoHeader'>
        <h1>This is the details page</h1>
    </div>;
}
