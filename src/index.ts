import * as mqtt from 'mqtt'

import { getCurrentWeather } from './usecases/getCurrentWeather'
import { parseWeatherShort } from './usecases/parseWeatherShort'

// ----- broker connection configs -----
const mqttUrl = 'mqtt://localhost:1883'
const client = mqtt.connect(mqttUrl)
const topic = 'test-topic'

client.on('connect', () => {
  console.log('Connected to mqtt broker')

  client.subscribe(topic, (err) => {
    if (!err) {
      console.log('Subscribed to topic')
    }
  })
})

// ----- gets weather data and parses it to short version -----
const getAndPublishWeather = async () => {
  try {
    const weatherDataA = await getCurrentWeather('Lisbon')
    const weatherShortA = parseWeatherShort(weatherDataA)
    console.log(weatherShortA)

    const weatherDataB = await getCurrentWeather('Zurich')
    const weatherShortB = parseWeatherShort(weatherDataB)
    console.log(weatherShortB)

    // publish messages to the topic
    client.publish(topic, JSON.stringify(weatherShortA))
    client.publish(topic, JSON.stringify(weatherShortB))
    console.log('Messages published')
  } catch (error) {
    console.error('Error getting or parsing weather data:', error)
  }
}

// ----- calls the function every 5 seconds -----
setInterval(getAndPublishWeather, 5000)
