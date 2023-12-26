import * as dotenv from 'dotenv'
dotenv.config()

// ----- VARIABLES DECLARATION -----
const apiKey = process.env.WEATHER_API_KEY as string
const apiUrl = new URL('http://api.weatherapi.com/v1/current.json')

// ----- MAIN FUNCTION -----
export const getCurrentWeather = async (city: string): Promise<any> => {
  try {
    // adds key to the api call
    apiUrl.searchParams.append('key', apiKey)
    // adds city name to the api call
    apiUrl.searchParams.append('q', city)

    // fetches the data
    const response = await fetch(apiUrl.toString())

    // handles the situation in case of an error
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`HTTP error! Status: ${response.status}, Error: ${JSON.stringify(errorData)}`)
    }

    // parses the data to json and returns it
    return await response.json()
  } catch (error) {
    console.error('Unable to fetch weather data', error)
    throw error
  }
}
