module.exports = {
  title: 'Vue human handbook',
  description: 'Vue human handbook',
  port: 8088,
  base: '/',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      '/',
      // '/components',
      // ['/pages/_button', 'button'],
      // '/pages/_actionsheet',
      ['/pages/MnActionSheet', 'actionSheet'],
      ['/pages/MnAlert', 'alert'],
      ['/pages/MnButton', 'button'],
      ['/pages/MnCard', 'card'],
      ['/pages/MnCarousel', 'carousel'],
      ['/pages/MnCheck', 'check'],
      ['/pages/MnColumn', 'column'],
      ['/pages/MnConfirm', 'confirm'],
      ['/pages/MnContainer', 'container'],
      ['/pages/MnCounter', 'counter'],
      ['/pages/MnDatetime', 'datetime'],
      ['/pages/MnForm', 'form'],
      // ['/pages/MnHome', 'home'],
      ['/pages/MnIcon', 'icon'],
      ['/pages/MnImage', 'image'],
      ['/pages/MnInput', 'input'],
      ['/pages/MnLoadingMask', 'loadingMask'],
      ['/pages/MnMenu', 'menu'],
      ['/pages/MnMessage', 'message'],
      ['/pages/MnModal', 'modal'],
      ['/pages/MnNavBar', 'navBar'],
      ['/pages/MnPaginate', 'paginate'],
      ['/pages/MnPopup', 'popup'],
      ['/pages/MnRadio', 'radio'],
      ['/pages/MnRate', 'rate'],
      ['/pages/MnScroller', 'scroller'],
      ['/pages/MnSearchBar', 'searchBar'],
      ['/pages/MnSelect', 'select'],
      ['/pages/MnTabBar', 'tabBar'],
      ['/pages/MnTag', 'tag'],
      ['/pages/MnTextarea', 'textarea'],
      ['/pages/MnTurn', 'turn']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/pages/MnButton' },
      { text: 'Vue', link: 'https://cn.vuejs.org/v2/guide/' }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/Users/it001684/workspace/humans/vuepress/src',
        'vue-human': '/Users/it001684/workspace/humans/'
      }
    }
  }
}
