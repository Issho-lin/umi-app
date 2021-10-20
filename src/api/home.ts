import { get } from '@/utils/request'
import host from './host'

const { env } = host

type WeatherType = {
  result: {
    status: number
    result: {
      city: string
      citycode: number
    }
  }
}

export const fetchWeatherApi = () => {
  const res: WeatherType = get(
    `${env}/jisuapi/weather?city=深圳&appkey=40e91431e978390daf06b07704a9523c`,
  ) as any
  return res
}
