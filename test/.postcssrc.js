module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 设计稿宽度，一般 750
      viewportHeight: 1334, // 设计稿高度，一般 1334
      unitPrecision: 3, // 计算精度，算到三位数 3.333
      viewportUnit: 'vw', // 使用单位
      selectorBlackList: ['.ignore', '.hairlines'], // 忽略的类名
      minPixelValue: 1, // 转换最小值
      mediaQuery: false // 媒体查询
    },
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}
