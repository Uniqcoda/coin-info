import React from 'react';
import { useLocation } from 'react-router-dom';
import { currencyFormatter, thousandSeparator } from '../utils/formatters';
import HomeButton from '../components/HomeButton';

export default function Details() {
    const location = useLocation();
    console.log(location.state);
    const coin = location.state.coin;
    console.log({ coin });
    return (
        <div>
            <div className='home-button'>
                <HomeButton />
            </div>
            <div className='cryptoHeader'>
                <div className='sub-header'>
                    <img src={coin.icon} alt='coin-icon' className='coin-image' />
                    <div>
                        <h2>{coin.name}</h2>
                        <h3>{coin.symbol}</h3>
                    </div>
                </div>
            </div>
            <div className='coinDisplay'>
                <div className='details'>
                    <p>Price: {currencyFormatter.format(coin.price)} </p>
                    <p>BTC: {coin.priceBtc}</p>
                    <p>Rank: {coin.rank}</p>
                    <p>Available Supply: {thousandSeparator(coin.availableSupply)}</p>
                    <p>Total Supply: {thousandSeparator(coin.totalSupply)}</p>
                    <p>Market Cap: {thousandSeparator(coin.marketCap)}</p>
                    <p>Volume: {coin.volume}</p>
                    <div className='button-container'>
                        <a className='page-button' href={coin.websiteUrl}>
                            Visit website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
