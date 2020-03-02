import { api_key, url_base_forecast } from '../constans/api_url'

 const getForecastByCity = city => {
    return `${url_base_forecast}?q=${city}&units=metric&appid=${api_key}`;
}

export default getForecastByCity;