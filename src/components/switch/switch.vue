<template>
    <span :class="switchClass" @click="toggle">
      <input type="hidden" :value="currentValue"/>
      <span :class="innerClass"></span>
      <slot v-if="currentValue===trueValue">{{on}}</slot>
      <slot v-if="currentValue===falseValue">{{off}}</slot>
    </span>
</template>

<script>
    export default {
      name: 'Switch',
      props: {
        value: {
          type: [String, Number, Boolean],
          default: false
        },
        trueValue: {
          type: [String, Number, Boolean],
          default: true
        },
        falseValue: {
          type: [String, Number, Boolean],
          default: false
        },
        disabled: {
          type: [String, Boolean],
          default: false
        },
        on: [String, Number],
        off: [String, Number]
      },
      data () {
        return {
          currentValue: this.value
        }
      },
      computed: {
        switchClass () {
          return [
            'switch',
            {
              'switch-disabled': this.disabled,
              'switch-checked': this.currentValue === this.trueValue
            }
          ]
        },
        innerClass () {
          return 'switch-inner'
        }
      },
      methods: {
        toggle () {
          if (this.disabled) {
            return
          }
          let checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue
          this.currentValue = checked
          this.$emit('input', checked)
          this.$emit('on-change', checked)
        }
      },
      watch: {
        value (val) {
          if (val !== this.trueValue && val !== this.falseValue) {
            throw Error('Value should be trueValue or falseValue')
          }
          this.currentValue = val
        }
      }
    }
</script>

<style>
  .switch {
    display: inline-block;
    position: relative;
    height: 24px;
    width: 48px;
    line-height: 22px;
    font-size: 12px;
    text-indent: 24px;
    border-radius: 24px;
    vertical-align: middle;
    border: 1px solid #ccc;
    background-color: #ccc;
    user-select: none;
    cursor: pointer;
    transition: all .15s ease-out;
  }
  .switch-inner {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: white;
    left: 1px;
    top: 1px;
    border-radius: 10px;
    transition: left .15s ease-out;
  }
  .switch-checked{
    text-indent: 4px;
    background-color: #0a67fb;
    border-color: #0a67fb;
    color: white;
  }
  .switch-checked .switch-inner{
    left: 25px;
  }
</style>
