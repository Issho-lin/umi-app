import { Spin } from 'antd'

export default () => {
  return (
    <Spin
      size="large"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}
