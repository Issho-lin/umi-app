import { useState, useCallback } from 'react'
import { Home } from '@/api'

const { fetchWeatherApi } = Home

function useFetchWeatherApi() {
  const [weather, setWeather] = useState({})
  const fetchWeather = useCallback(async () => {
    const res = await fetchWeatherApi()
    const { result } = res
    setWeather(result)
  }, [])

  return {
    weather,
    setWeather,
    fetchWeather,
  }
}
export default {
  useFetchWeatherApi,
}
