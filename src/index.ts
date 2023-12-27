import { getCurrentWeather } from './usecases/getCurrentWeather'
import { parseWeatherData } from './usecases/parseWeatherData'

const getAndParseWeather = async () => {
  try {
    const weatherData = await getCurrentWeather('Lisbon')

    const parsedData = parseWeatherData(weatherData)

    console.log(parsedData)
  } catch (error) {
    console.error('Error getting or parsing weather data:', error)
  }
}

setInterval(getAndParseWeather, 3000)
