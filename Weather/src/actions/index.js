import axios from 'axios';

const API_KEY = 'a47981f2e692fe65bb7073c2698a3aab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}