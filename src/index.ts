import { getCurrentWeather } from './usecases/getCurrentWeather'

const getWeather = async () => {
  await getCurrentWeather('Lisbon')
  await getCurrentWeather('Zurich')
}

setInterval(getWeather, 3000)
