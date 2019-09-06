var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/', // /开始 /结束
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'vue-human': resolve('../')
      }
    }
  }
}
