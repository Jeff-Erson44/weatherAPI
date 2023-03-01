import { useState } from 'react';
import { fetchSearch } from '../pages/api/fetchSearch';
import Image from 'next/image';
import styled from 'styled-components';

const SearchStyled = styled.div`

    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 30%;
        input, label{
            width: 100%;
            text-align: center;
            margin-bottom: 10px;
        }
    }
    .container__meteo{
        text-align: center;
        &--city{
            span{
                font-weight: bold;
                text-transform: Capitalize;
            }
        }
        p{
            margin-bottom: 5px;
        }
    }
`


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
        <SearchStyled>  
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
            {weather && (
            <div className='container__meteo'>
                <Image
                    src={'https:'+ weather.current.condition.icon}
                    width={100}
                    height={100}
                    alt='icone météo actuelle'
                />
                <h2 className='container__meteo--city'>Météo actuelle à : <span>{city}</span></h2>
                <p className='container__meteo--region'>Région : {weather.location.region}</p>
                <p>Température actuelle : {weather.current.temp_c}°C</p>
                <p>Condition : {weather.current.condition.text}</p>
                <p>Vitesse du vent: {weather.current.wind_kph} km/h</p>
                <p>Pourcentage humidité: {weather.current.humidity} %</p>
                <p>Heure actuelle : {weather.location.localtime}</p>
                
            </div>
        )}
        </SearchStyled>
        </>
    )
}
