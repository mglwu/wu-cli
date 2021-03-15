const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('style-vw-loader')
      .loader('style-vw-loader')
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/variables.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/adminapi': {
        target: 'https://youju.dev.bidewu.com',
        pathRewrite: { '^/adminapi': '/adminapi' },
        ws: true,
        changeOrigin: true
      }
    }
  }
}
