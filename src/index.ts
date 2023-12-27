import { getCurrentWeather } from './usecases/getCurrentWeather'
import { parseWeatherDataShort } from './usecases/parseWeatherDataShort'

const getAndParseWeatherA = async () => {
  try {
    // Fetch and parse weather data for Lisbon
    const weatherDataA = await getCurrentWeather('Lisbon')
    const parsedDataA = parseWeatherDataShort(weatherDataA)
    console.log(parsedDataA)
  } catch (error) {
    console.error('Error getting or parsing weather data:', error)
  }
}

const getAndParseWeatherB = async () => {
  try {
    // Fetch and parse weather data for Zurich
    const weatherDataB = await getCurrentWeather('Zurich')
    const parsedDataB = parseWeatherDataShort(weatherDataB)
    console.log(parsedDataB)
  } catch (error) {
    console.error('Error getting or parsing weather data:', error)
  }
}

setInterval(getAndParseWeatherA, 3000)
setInterval(getAndParseWeatherB, 4000)
