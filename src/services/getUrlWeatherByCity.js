import { api_key, url_base_weather } from '../constans/api_url'

 const getWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&units=metric&appid=${api_key}`;
}

export default getWeatherByCity;