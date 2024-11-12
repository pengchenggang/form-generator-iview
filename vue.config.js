const { defineConfig } = require('@vue/cli-service')

const BASE_URL = process.env.NODE_ENV === 'production' ? '/form-generator-iview/' : '/'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: BASE_URL,
  outputDir: 'docs'
})
