import axios from 'axios';
import c from './constants';

export function fetchWeather(city) {
  const url = `${c.WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: c.FETCH_WEATHER,
    payload: request, // will return the data to React due to react-promise.
  } // Redux Promise is handling the Promise under the covers, and returning the Response object instead of the Promise.
}
