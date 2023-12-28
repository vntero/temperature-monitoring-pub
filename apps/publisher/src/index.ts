import * as mqtt from 'mqtt'

import { getCurrentWeather } from './usecases/getCurrentWeather'

// ----- broker connection configs -----
const client = mqtt.connect('mqtt://broker.hivemq.com/')
const topic = 'candide-cunegonde'

// ----- connect to broker -----
client.on('connect', () => {
  console.log('Connected to mqtt broker')
  setInterval(async () => {
    const weatherDataA = await getCurrentWeather('Lisbon')
    const weatherDataB = await getCurrentWeather('Zurich')

    client.publish(topic, `Weather data for Lisbon -> ${JSON.stringify(weatherDataA)}.`)
    console.log('Published: ', weatherDataA)
    client.publish(topic, `Weather data for Zurich -> ${JSON.stringify(weatherDataB)}.`)
    console.log('Published: ', weatherDataB)
  }, 5000)
})
