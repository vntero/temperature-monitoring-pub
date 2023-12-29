import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

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
