import * as dotenv from 'dotenv'

import { WeatherData, WeatherDataShort } from '../models/weatherData'

dotenv.config()

/**
 * @param city 
 * @returns Current weather data in json
 */
export const getCurrentWeather = async (city: string): Promise<WeatherDataShort> => {
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
    const data = await response.json() as WeatherData
    // returns required structure
    return {
      city: data.location.name,
      temperature: data.current.temp_c,
      date: new Date(data.location.localtime),
    }
  } catch (error) {
    console.error('Unable to fetch weather data', error)
    throw error
  }
}
