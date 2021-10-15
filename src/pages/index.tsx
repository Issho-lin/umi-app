import { useEffect } from 'react'
import { DatePicker } from 'antd'
import { useModel } from 'umi'
import styles from './index.less'

export default function IndexPage() {
  const { fetchAccount } = useModel('useHome')
  useEffect(() => {
    fetchAccount()
    console.log('123123')
  }, [fetchAccount])
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
