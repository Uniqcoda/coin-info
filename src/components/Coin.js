import React from 'react';
import { Link } from 'react-router-dom';

export default function Coin({ name, price, symbol, icon }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 10,
    });

    return (
        <Link to="/details" className='coin'>
            <div className='coin-header'>
                <img src={icon} alt='coin-icon' />
                <h2>
                    {name} - {symbol}
                </h2>
            </div>
            <h3>Price: {currencyFormatter.format(price)} </h3>
        </Link>
    );
}
