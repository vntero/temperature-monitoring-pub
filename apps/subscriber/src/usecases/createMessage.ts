import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

import { WeatherDataShort } from '../models/weatherData'

dotenv.config()

// extract db connection information from env file
const dbName = process.env.DB
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT

// construct the connection URI
const dbConnectionUri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

console.error('🔥🔥🔥 ~ file: createMessage.ts:18 ~ dbConnectionUri:', dbConnectionUri)
// connect to database by passing a connection URI
const sequelize = new Sequelize(dbConnectionUri)

export const createMessage = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database', error)
  }
}

createMessage()
