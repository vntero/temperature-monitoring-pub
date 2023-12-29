import { sequelize } from '../database/config'
import { WeatherDataShort } from '../interfaces/weatherData'
import { Message } from '../models/message'

export const createMessage = async (message: WeatherDataShort): Promise<void> => {
  try {
    // sync models with the db
    await sequelize.sync()
    // authenticate connection
    await sequelize.authenticate()
    console.log('Connection has been established successfully')

    const msg = await Message.create({
      city: message.city,
      temperature: message.temperature,
      date: message.date,
    })
    console.log('Saved to db:', msg.toJSON())
  } catch (error) {
    console.error('Unable to connect to the database', error)
  }
}
