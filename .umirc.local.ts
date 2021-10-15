import { defineConfig } from 'umi'

export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://www.8891.com.tw',
      secure: false,
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': ''
      // }
    },
  },
})
