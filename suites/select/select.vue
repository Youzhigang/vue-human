<template>
  <select
    class="mn-select"
    :value="computedValue"
    @input="onInput">
    <option
      :value="index"
      :alt="option[optionValueProp]"
      v-for="(option, index) in options">{{ option[optionLabelProp] }}</option>
  </select>
</template>

<script>
  import Element from '../../utils/Element'

  export default new Element({
    name: 'mn-select',
    props: {
      value: {},
      options: {
        type: Array,
        default: () => {
          return []
        }
      },
      optionLabelProp: {
        default: 'label',
        type: String
      },
      optionValueProp: {
        default: 'value',
        type: String
      }
    },
    mounted () {
      console.log(this)
    },
    computed: {
      computedValue () {
        let options = this.options.filter(item => item[this.optionValueProp] === this.value)

        if (options.length > 0) {
          return this.options.indexOf(options[0])
        } else {
          console && console.warn('未找到匹配的 select value 值。')
          return 0
        }
      }
    },
    methods: {
      onInput (event) {
        let value = this.options[parseInt(event.target.value)][this.optionValueProp]
        this.$emit('input', value)
      }
    }
  })
</script>

<style lang="scss">
  .mn-select {
    border: none;
    background: transparent;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    margin: -1rem 0;
    outline: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
</style>
