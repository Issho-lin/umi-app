import { useEffect } from 'react'
import { Home } from '@/hooks'

const { useFetchWeatherApi } = Home

export default function useHome() {
  const { weather, fetchWeather } = useFetchWeatherApi()
  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])
  return {
    weather,
  }
}
