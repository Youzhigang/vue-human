module.exports = {
  title: 'Vue human handbook',
  description: 'Vue human handbook',
  port: 8088,
  base: '/', // /开始 /结束
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      '/',
      '/components',
      ['/pages/_button', 'button'],
      '/pages/_actionsheet',
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/' }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').join(__dirname, '..', 'src'),
        'vue-human': require('path').join(__dirname, '..', '../')
      }
    }
  }
}
