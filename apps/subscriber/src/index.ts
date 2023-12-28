import * as mqtt from 'mqtt'

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

// grabs message and logs it
client.on('message', (topic, message) => {
  console.log('Topic: ' + topic, 'Message: ' + message.toString())
})
