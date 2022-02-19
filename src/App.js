import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';
import NoMatch from './routes/NoMatch';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='details' element={<Details />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
