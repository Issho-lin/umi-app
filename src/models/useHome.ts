import { useEffect } from 'react'
import { useApi } from '@/hooks'

const {
  Home: { useFetchWeatherApi },
} = useApi

export default function useHome() {
  const { weather, fetchWeather } = useFetchWeatherApi()
  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])
  return {
    weather,
  }
}
