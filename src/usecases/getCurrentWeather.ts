import * as dotenv from 'dotenv'

import { WeatherData } from '../models/weatherData'
dotenv.config()

/**
 * @param city 
 * @returns Current weather data in json
 */
export const getCurrentWeather = async (city: string): Promise<WeatherData> => {
  try {
    const apiKey = process.env.WEATHER_API_KEY as string
    const apiUrl = new URL('http://api.weatherapi.com/v1/current.json')
    // adds key to the api call
    apiUrl.searchParams.append('key', apiKey)
    // adds city name to the api call
    apiUrl.searchParams.append('q', city)

    // fetches the data
    const response = await fetch(apiUrl.toString())

    // handles the situation in case of an HTTP error
    if (!response.ok) {
      const errorData = response.json()
      throw new Error(`HTTP error! Status: ${response.status}, Error: ${JSON.stringify(errorData)}`)
    }

    // parses data to json
    return response.json()
  } catch (error) {
    console.error('Unable to fetch weather data', error)
    throw error
  }
}
