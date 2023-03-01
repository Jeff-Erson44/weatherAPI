import axios from 'axios';

export async function fetchSearch(city) {
    const apiUrl = 
        `http://api.weatherapi.com/v1/current.json?key=07c39328eb134ed3add233858230602&q=${city}`;

        
    try {
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        return weatherData;
    } catch (error) {
        console.log(error);
    return null;
    }
}