// pages/search.js

import { useState } from 'react';
import { fetchSearch } from '../pages/api/fetchSearch';

export default function Search (){

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    async function handleSearch(e) {
        e.preventDefault();
        const weatherData = await fetchSearch(city);
        setWeather(weatherData);
        console.log(weatherData);
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <label>
                    Entrer une localisation
                </label>
                <input 
                    type="text" 
                    placeholder="Nom de la ville"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button 
                    type="submit">
                        Rechercher
                </button>
            </form>
        </>
    )
}
