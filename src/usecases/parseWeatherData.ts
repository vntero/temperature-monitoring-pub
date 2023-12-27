import { ChallengeData, WeatherData } from '../models/weatherData'

/**
 * @param data weather data received from the api
 * @returns city, temperature and date/time
 */
export const parseWeatherData = (data: WeatherData): ChallengeData => {
  return {
    city: data.location.name,
    temperature: data.current.tempC,
    date: new Date(data.location.localtime),
  }
}
