import human from '../../'
import core from '../../suites/core'

console.log(human, core)
export default (({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData
}) => {
  // console.log(Vue)
  Vue.use(human)
  Vue.use(core)
  console.log(router)
})
