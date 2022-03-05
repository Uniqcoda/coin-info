import { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from '../components/Coin';

function App() {
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response) => {
            setListOfCoins(response.data.coins);
        });
    }, []);

    const filteredCoins = listOfCoins.filter((coin) => coin.name.toLowerCase().includes(searchWord.toLowerCase()));

    return (
        <div>
            <div className='cryptoHeader'>
                <h1>Hi! Welcome to Coin-Info</h1>
                <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Search coin name here...'
                    onChange={(event) => {
                        setSearchWord(event.target.value);
                    }}
                />
            </div>
            <div className='cryptoDisplay'>
                {filteredCoins.length > 0 ? (
                    filteredCoins.map((coin, index) => <Coin key={index} coin={coin} />)
                    ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default App;
