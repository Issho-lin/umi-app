import { useEffect } from 'react'
import { DatePicker } from 'antd'
import { useModel } from 'umi'
import { useApi } from '@/hooks'
import styles from './index.less'

const {
  Home: { useFetchWeatherApi },
} = useApi

export default function IndexPage() {
  const { weather } = useModel('useHome')
  const { fetchWeather } = useFetchWeatherApi()
  useEffect(() => {
    fetchWeather()
    console.log(weather)
  }, [fetchWeather, weather])
  return (
    <div>
      <h6 className={styles.title}>
        <i>Page index</i>
      </h6>
      <DatePicker />
      <ul>
        <li id="123">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div />
    </div>
  )
}
