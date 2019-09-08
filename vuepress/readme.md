---
# home: true
# heroText: null
# heroImage: /vue-human.jpg
# tagline: null
home: true
heroText: null
heroImage: /vue-human.jpg
tagline: ' '
actionText: See our Examples →
actionLink: ./pages/MnButton
features:
- title: 高效
  details: 有丰富的交互和动画组件，坚持自己的设计理念
- title: 响应式
  details: 坚持响应式设计，各个组件兼顾移动端、平板、桌面游览器等多个不同屏幕尺寸的场景。
- title: 简洁
  details: 采用了大量的 ES6 语法，面向未来, 源码级别发布
---

<p align="center">
  <a href="https://www.npmjs.com/package/vue-human" title="npm">
    <img src="https://badge.fury.io/js/vue-human.svg">
  </a>
  <a href="https://minowu.gitbooks.io/vue-human" title="gitbook">
    <img src="https://img.shields.io/badge/gitbook-中文文档-brightgreen.svg?style=flat-square">
  </a>
  <a href="https://gitter.im/HumanUI/Lobby" title="GITTER">
    <img src="https://img.shields.io/badge/gitter-chat-brightgreen.svg?style=flat-square">
  </a>
  <span title="License MIT">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square">
  </span>
</p>

<p align="center">
  <a href="https://circleci.com/gh/freshesx/humans/tree/master" title="CircleCI">
    <img src="https://circleci.com/gh/freshesx/humans/tree/master.svg?style=svg">
  </a>
</p>

`Vue Human` 是为高质量用户体验而设计的组件库。他有丰富的交互和动画组件，有时他会比较顽固，坚持自己的设计理念，有时他又会比较性感，让你不经意间产生爱意。

他坚持响应式设计，各个组件兼顾移动端、平板、桌面游览器等多个不同屏幕尺寸的场景，你可以使用 Vue Human 构建自己的移动应用、中后台管理界面或者你想要做的别的事。


### 参与和改进 Human 的开发

项目克隆至本地后，执行如下命令

``` bash
# 安装依赖包
$ yarn install

# 游览器访问 localhost:8888
$ yarn start

# 单元测试的命令
$ yarn run unit
```

### 在你的项目中使用

vue-human 为了实现按需加载，所以采用了大量的 ES6 语法，以及未编译成固定的 JS 文件，所以在开发中会依赖非常多的 npm 包，需要 babel 转换，sass 编译，vue-loader 处理等等.

- 需要添加的webpack 配置
```javascript
// <!-- webpack.base.conf -->
module: {
  // ...other config
  rule: [
    {
      test: /vue-human(-\w+)?[\/\\].*\.js$/,
      loader: 'babel-loader',
      exclude: /vue-human(-\w+)?[\/\\]node_modules[\/\\].*/
    },
    // ...other rules
  ]
}
```
``` javascript
// 配置文件 human.js
import Vue from 'vue'
import human from 'vue-human'
import core from 'vue-human/suites/core'

Vue.use(human)
Vue.use(core)
```

``` vue
<!-- 某个页面内使用轮播图 carousel.vue -->
<script>
  import carousel from 'vue-human/suites/carousel'

  export default {
    components: {
      ...carousel.map()
    }
  }
</script>
```
