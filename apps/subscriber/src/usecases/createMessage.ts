import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

import { WeatherDataShort } from '../models/weatherData'

dotenv.config()

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@example.com:5432/temperature-monitoring`)

export const createMessage = (message: WeatherDataShort): any => {

}
