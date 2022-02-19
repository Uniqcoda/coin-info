import React from 'react';
import { Link } from 'react-router-dom';

export default function Coin({ coin }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 10,
    });

    return (
        <Link to={`/details/${coin.id}`} className='coin'>
            <div className='coin-header'>
                <img src={coin.icon} alt='coin-icon' />
                <h2>
                    {coin.name} - {coin.symbol}
                </h2>
            </div>
            <h3>Price: {currencyFormatter.format(coin.price)} </h3>
        </Link>
    );
}
