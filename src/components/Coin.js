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
            <h2>Name: {name}</h2>
            <img src={icon} alt='coin-icon' />
            <h4>Price: {currencyFormatter.format(price)} </h4>
            <h4>Symbol: {symbol} </h4>
        </div>
    );
}
