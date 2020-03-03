import {
  CLOUDS,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from '../constans/weather'


/** 
 * Implementado metodo de forma constante para exportarlo y
 * poder usarlo de forma externa
 */

/**
 * La siguiente función lo que hace es parsear el código del icono del tiempo
 * por la constante correspondiente de nuestros iconos.
 * @param {codigo del icono} code 
 */
const parseCodeIconFromResponse = code => {
  let iconParsed = null;
  switch (true) {
    case (code < 300):
      iconParsed = THUNDER;
      break;
    case (code < 400):
      iconParsed = DRIZZLE;
      break;
    case (code < 600):
      iconParsed = RAIN;
      break;
    case (code < 700):
      iconParsed = SNOW;
      break;
    case (code === 800):
      iconParsed = SUN;
      break;
    default:
      iconParsed = CLOUDS;
      break;
  }
  return iconParsed;
};
/**
 * Exportamos metodo que tratará la respuesta de la llamada
 * a la api por query de weather
 * @param {respuesta llamada api por weather} response 
 */
export const getDataFromResponse = response => {
  const { temp, humidity } = response.main;
  const { id: weatherIconCode } = response.weather[0];
  const { speed } = response.wind;
  return {
    city: response.name,
    temperature: parseFloat(temp.toFixed(1)),
    weatherState: parseCodeIconFromResponse(weatherIconCode),
    humidity: humidity,
    wind: `${speed} m/s`,
  };
};

/**
 * Exportamos metodo que tratará la respuesta de la llamada
 * a la api por query de forecast
 * @param {respuesta llamada api por forecast} response 
 */
export const getDataForecast = response => {
  return {};
}
const utilService = {
  getDataFromResponse,
  getDataForecast
}
export default utilService;