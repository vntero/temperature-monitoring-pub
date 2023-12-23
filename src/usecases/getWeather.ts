// ----- IMPORTS -----
import * as dotenv from 'dotenv'

// ----- CONFIGS -----
dotenv.config()

// ----- VARIABLES DECLARATION -----
const apiKey = process.env.WEATHER_API_KEY as string
const apiUrl = new URL('http://api.weatherapi.com/v1/current.json')

export const getWeather = async (city: string) => {
  try {
    apiUrl.searchParams.append('key', apiKey)
    apiUrl.searchParams.append('q', city)

    const response = await fetch(apiUrl.toString())

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.error('🔥🔥🔥 ~ file: getWeather.ts:23 ~ getWeather ~ data:', data)
    return data
  } catch (error) {
    console.error('Unable to fetch weather data', error)
  }
}
