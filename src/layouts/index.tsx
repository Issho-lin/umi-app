import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import styles from './index.less'

dayjs.locale('zh-cn')

const Layouts: React.FC = ({ children }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className={styles.main}>{children}</div>
    </ConfigProvider>
  )
}
export default Layouts
