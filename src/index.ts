import { makeGetCurrentWeather } from './usecases/getCurrentWeather'

const getCurrentWeather = () => makeGetCurrentWeather('Lisbon')

setInterval(getCurrentWeather, 5000)
