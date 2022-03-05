import React from 'react';
import { Link } from 'react-router-dom';
import { currencyFormatter } from '../utils/formatters';

export default function Coin({ coin }) {
    return (
        <div className='coin'>
            <div className='coin-header'>
                <img src={coin.icon} alt='coin-icon' />
                <h2>
                    {coin.name} - {coin.symbol}
                </h2>
            </div>
            <h3> Price: {currencyFormatter.format(coin.price)} </h3>
            <div className='button-container'>
                <Link to={`/details/${coin.id}`} state={{ coin }} className='page-button'>
                    View
                </Link>
            </div>
        </div>
    );
}
