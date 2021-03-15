# 移动端 Spa 应用

#### 技术栈

- vue
- vue-router
- vuex

### 安装依赖

```
npm install
```

### 开发

```
npm run dev
```

### 打包

```
npm run build
```

### 页面适配方案（vw）

缺点:

1. 比如当容器使用 vw 单位，margin 采用 px 单位时，很容易造成整体宽度超过 100vw，从而影响布局效果。对于类似这样的现象，我们可以采用相关的技术进行规避。比如将 margin 换成 padding，并且配合 box-sizing。
2. `px` 转换成 `vw` 单位，多少还会存在一定的像素差，毕竟很多时候无法完全整除。

#### 依赖包:

- postcss-import
- postcss-url
- autoprefixer
- postcss-aspect-ratio-mini
- postcss-px-to-viewport
- postcss-write-svg
- postcss-cssnext
- cssnano
- style-vw-loader
- cssnano-preset-advanced

##### postcss-import

解决 `@import` 引入路径问题，可以方便的使用本地文件等。

##### postcss-url

解决处理文件，比如图片文件、字体文件等引用路径的处理。

##### autoprefixer

自动添加 css 适配前缀，用的时候配置 Browserlist 指定的参数。

##### postcss-aspect-ratio-mini

解决用来处理元素容器宽高比，可以定义一个指定宽高比的容器

##### postcss-px-to-viewport

解决 px 单位转换为 vw、vh、vmin 或者 vimx 这样的视窗单位，也是 VW 适配方案的核心插件之一。

用法：在 `.postcssrc.js` 文件中配置

```
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
      viewportWidth: 750,                             // 设计稿宽度，一般 750
      viewportHeight: 1334,                           // 设计稿高度，一般 1334
      unitPrecision: 3,                               // 计算精度，算到三位数 3.333
      viewportUnit: 'vw',                             // 使用单位
      selectorBlackList: ['.ignore', '.hairlines'],   // 忽略的类名
      minPixelValue: 1,                               // 转换最小值
      mediaQuery: false                               // 媒体查询
    },
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
}
```

css 文件中：

```
.box {
  width: 180px;
  height: 300px;
}
```

编译出来的 CSS

```
.box {
  width: 24vw;
  height: 40vw;
}
```

`想要实现让插件忽略编译的时候使用 .ignore 类名`

```
<div class="box ignore"></div>
```

写 CSS 的时候

```
.ignore {
  margin: 10px;
}

.box {
  width: 180px;
  height: 300px;
}
```

编译出来的 CSS

```
.ignore {
  margin: 10px;
}

.box {
  width: 24vw;
  height: 40vw;
}
```

##### postcss-write-svg

解决 1px 边框的问题，该插件主要用的是 border-image 和 background 来做 1px 的相关处理

用法：

```
@svg square {
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 100%;
  }
}

#example {
  background: white svg(square param(--color #00b1ff));
}
```

编译出来就是:

```
#example {
  background: white url("data:image/svg+xml;charset=utf-8,&...")
}
```

> 由于有一些低端机对 `border-image` 支持度不够友好，建议使用 `background-image` 的这个方案。

##### postcss-cssnext

该插件可以让我们使用 CSS 未来的特性，其会对这些特性做相关的兼容性处理。

##### cssnano

主要用来压缩和清理 CSS 代码。

`cssnano` 集成了一些其他的 PostCSS 插件，如果你想禁用 `cssnano` 中的某个插件的时候可以像下面这样操作：

```
cssnano: {
  autoprefixer: false,
  'postcss-zindex': false
}
```

上面的代码把 `autoprefixer` 和 `postcss-zindex` 禁掉了。前者是有重复调用，后者是一个讨厌的东东。只要启用了这个插件，`z-index` 的值会重置为 `1`。这是一个天坑，千万
记得将 `postcss-zindex` 设置为 `false`。

##### style-vw-loader

解决行内 css 的 px 转换用

用法：vue.config.js 里配置 `options默认是下面配置的，可以不传`

```
{
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .test(/\.vuew/$)
      .use('style-vw-loader')
        .loader('style-vw-loader')
          .options: {
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 5,
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            miniPixelValue: 1
          }
  }
}
```

##### cssnano-preset-advanced

在 cssnano 的配置中，使用了 `preset: 'advanced'`，所以需要另外安装

```
npm install cssnano-preset-advanced -D
```

### 路由配置方案

### 数据请求方案
