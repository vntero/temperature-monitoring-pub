import { getCurrentWeather } from './usecases/getCurrentWeather'
import { parseWeatherShort } from './usecases/parseWeatherShort'

const getAndParseWeather = async () => {
  try {
    const weatherDataA = await getCurrentWeather('Lisbon')
    const parsedDataA = parseWeatherShort(weatherDataA)
    console.log(parsedDataA)

    const weatherDataB = await getCurrentWeather('Zurich')
    const parsedDataB = parseWeatherShort(weatherDataB)
    console.log(parsedDataB)
  } catch (error) {
    console.error('Error getting or parsing weather data:', error)
  }
}

setInterval(getAndParseWeather, 3000)
