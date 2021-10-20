import { defineConfig } from 'umi'

export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://way.jd.com',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
})
