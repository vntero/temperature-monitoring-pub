import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

import { WeatherDataShort } from '../models/weatherData'

dotenv.config()

// Extract database connection information from environment variables
const dbName = process.env.DB
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT

// Construct the connection URI
const dbConnectionUri = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`

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
