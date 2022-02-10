import React from 'react';

export default function Coin({ name, price, symbol, icon }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 10,
    });

    return (
        <div className='coin'>
            <div className='coin-header'>
                <img src={icon} alt='coin-icon' />
                <h2>{name} - {symbol}</h2>
            </div>
            <h3>Price: {currencyFormatter.format(price)} </h3>
        </div>
    );
}
