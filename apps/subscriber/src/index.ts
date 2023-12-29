import * as mqtt from 'mqtt'

import { createMessage } from './usecases/createMessage'
import { WeatherDataShort } from './interfaces/weatherData'

// broker connection configs
const client = mqtt.connect('mqtt://broker.hivemq.com')
const topic = 'candide-cunegonde'

// connects to broker
client.on('connect', () => {
  console.log('Connected to mqtt broker via HiveMQ')
  // subscribes to topic
  client.subscribe(topic, (err) => {
    !err
      ? console.log('Subscribed to topic: ' + topic)
      : console.error('Error subscribing to topic:', err)
  })
})

// grabs message, parses it and saves it
client.on('message', (topic, message) => {
  console.log('Received message:', message.toString())
  try {
    const parsedMessage = JSON.parse(message.toString()) as WeatherDataShort
    console.log('Parsed message:', parsedMessage)
    createMessage(parsedMessage)
  } catch (error) {
    console.error('Error parsing message:', error)
  }
})
