import Shade from '../../utils/Shade'

export default {
  props: {
    visible: Boolean
  },
  data () {
    return {
      /**
       * 存储 shade layer 对象
       * @type {Layer}
       */
      shade: undefined
    }
  },
  watch: {
    /**
     * 监听 visible 的变化
     * @method visible
     * @private
     * @param  {boolean} visible
     * @return {undefined}
     */
    visible (visible) {
      visible ? this.shade.show() : this.shade.close()
    }
  },
  /**
   * 创建 Shade Layer 对象，并监听 update:visible 事件
   * @method created
   * @private
   * @return {undefined}
   */
  created () {
    this.shade = Shade.create()
    this.shade.vm.$on('update:visible', visible => {
      if (!visible) this.hide()
    })
  }
}
