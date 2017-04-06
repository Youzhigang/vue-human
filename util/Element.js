/** Class 封装 vue component export */
export default class Element {
  /**
   * 构造函数，合并传入的 vue 配置和 this
   * @param {Object} vueComponent vue 组件的配置对象
   */
  constructor (vueComponent) {
    Object.assign(this, vueComponent)
  }

  /**
   * vue.use() 需要的 install 方法
   * @param {Vue} Vue
   * @param {Object} [options={}]
   * @return {void}
   */
  install (Vue, options = {}) {
    if (this.beforeInstalled) {
      this.beforeInstalled(Vue, options)
    }

    Vue.component(this.name, this)

    if (this.afterInstalled) {
      this.afterInstalled(Vue, options)
    }
  }
}
