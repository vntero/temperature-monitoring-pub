// ----- IMPORTS -----
import * as dotenv from 'dotenv'

// ----- CONFIGS -----
dotenv.config()

// ----- VARIABLES DECLARATION -----
const apiKey = process.env.WEATHER_API_KEY as string
const apiUrl = new URL('http://api.weatherapi.com/v1/current.json')

const getWeather = async (city: string) => {
  try {

  } catch (error) {
    console.error('Unable to fetch weather data', error)
  }
}
