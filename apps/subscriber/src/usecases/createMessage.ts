import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

import { WeatherDataShort } from '../models/weatherData'
import { Message } from '../models/message'

dotenv.config()

// extract db connection information from env file
const dbName = process.env.DB
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT

// construct the connection URI
const dbConnectionUri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

// connect to database by passing a connection URI
export const sequelize = new Sequelize(dbConnectionUri, {
  dialect: 'postgres',
})

export const createMessage = async (message: WeatherDataShort): Promise<any> => {
  try {
    // authenticate connection
    await sequelize.authenticate()
    console.log('Connection has been established successfully')

    const msg = await Message.create({
      city: message.city,
      temperature: message.temperature,
      date: message.date,
    })
    console.log('Auto generated ID', msg)
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
