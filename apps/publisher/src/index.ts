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
    console.log(weatherDataA)
    const weatherDataB = await getCurrentWeather('Zurich')
    console.log(weatherDataB)

    client.publish(topic, 'Simple MQTT using HiveMQ: ' + weatherDataA + '.')
    client.publish(topic, 'Simple MQTT using HiveMQ: ' + weatherDataB + '.')
  }, 5000)
})
