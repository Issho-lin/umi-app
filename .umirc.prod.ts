import { defineConfig } from 'umi'

export default defineConfig({
  chainWebpack(config) {
    config.merge({
      plugin: {
        install: {
          plugin: require('terser-webpack-plugin'),
          args: [
            {
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            },
          ],
        },
      },
    })
  },
})
