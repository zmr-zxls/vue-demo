<template>
    <div class="icon-input">
      <input  :class="iconInputClass"
              :type="type"
              :name="name"
              :value="currentValue"
              :placeholder="placeholder"
              @input="handleInput"
              @blur="handleBlur"/>
      <Icon :name="icon"></Icon>
    </div>
</template>

<script>
    import Icon from '../icon/icon.vue'
    export default {
      name: 'iconInput',
      components: { Icon },
      props: {
        className: String,
        value: {
          type: [String, Number],
          default: ''
        },
        name: String,
        type: {
          type: String,
          default: 'text'
        },
        placeholder: String,
        icon: {
          type: String,
          require: true
        }
      },
      data () {
        return {
          currentValue: this.value
        }
      },
      computed: {
        iconInputClass () {
          return ['form-control', this.className]
        }
      },
      watch: {
        value (val) {
          if (val === this.currentValue) {
            return
          } else {
            this.setCurrentValue(val)
          }
        }
      },
      methods: {
        setCurrentValue (val) {
          this.currentValue = val
        },
        handleInput (event) {
          const val = event.target.value
          this.setCurrentValue(val)
          this.$emit('input', val)
        },
        handleBlur (event) {
          this.$emit('on-blur', this.currentValue)
        }
      }
    }
</script>
<style>
  .icon-input {
    position: relative;
    display: block;
  }
  .icon-input .form-control{
    position: relative;
    padding-left: 26px;
  }
  .icon-input .icon{
    position: absolute;
    left: 8px;
    top: 0px;
    font-size: 13px;
    line-height: 32px;
  }
</style>
