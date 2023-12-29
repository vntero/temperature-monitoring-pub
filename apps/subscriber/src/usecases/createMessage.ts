import { sequelize } from '../database/config'
import { WeatherDataShort } from '../interfaces/weatherData'
import { Message } from '../models/message'

export const createMessage = async (message: WeatherDataShort): Promise<any> => {
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
    console.log('Saved to db:', msg)
    // close connection
    sequelize.close()
  } catch (error) {
    console.error('Unable to connect to the database', error)
  }
}

createMessage({
  city: 'Lisboa',
  temperature: 8,
  date: new Date('2023-12-31'),
})
