import { defineConfig } from 'umi'
import routes from './config/routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  dynamicImport: {
    loading: '@/loading',
  },
  hash: true,
  theme: {
    '@primary-color': '#3264ff',
  },
  define: {
    'process.env.API_ENV': process.env.API_ENV,
  },
  ignoreMomentLocale: true,
  mfsu: {},
  chainWebpack(config) {
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin')
  },
})
