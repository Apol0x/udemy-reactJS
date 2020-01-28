import weatherIcon from '../constans/weather'
//Implementado metodo de forma constante para exportarlo y poder usarlo de forma externa

const getDataFromResponse = response => {
    const { temp, humidity } = response.main;
    const { main: iconWeather } = response.weather[0];
    const { speed } = response.wind;
    const dataReturn = {
      temperature: temp.toFixed(1),
      weatherState: weatherIcon[iconWeather.toUpperCase()],
      humidity: humidity,
      wind: `${speed} m/s`,
    };
    return dataReturn;
  };

export default getDataFromResponse;