import * as mqtt from 'mqtt'

import { getCurrentWeather } from './usecases/getCurrentWeather'
import { parseWeatherShort } from './usecases/parseWeatherShort'

// ----- broker connection configs -----
const mqttUrl = 'mqtt://localhost:1883'
const client = mqtt.connect(mqttUrl)

client.on('connect', () => {
  console.log('Connected to mqtt broker')

  client.subscribe('test-topic', (err) => {
    if (!err) {
      console.log('Subscribed to topic')
    }
  })
})

/**
 * Combines getCurrentWeather with parseWeatherShort.
 * It gets weather data and parses it to a short version.
 */
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

setInterval(getAndParseWeather, 5000)
