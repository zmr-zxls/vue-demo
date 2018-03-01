<template>
    <span class="checkbox-inline" @click="toggle">
      <input type="hidden" :name="name" :value="value"/>
      <template v-if="align==='left'">
        <span class="checkbox-label">{{label}}</span>
        <span class="checkbox-icon"><span :class="iconClass"></span></span>
      </template>
      <template v-if="align==='right'">
        <span class="checkbox-icon"><span :class="iconClass"></span></span>
        <span class="checkbox-label">{{label}}</span>
      </template>
    </span>
</template>

<script>
    import { oneOf } from '../../utils/base'
    export default {
      name: 'Checkbox',
      props: {
        value: [String, Number, Boolean],
        name: {
          type: String
        },
        checked: {
          type: [String, Boolean],
          default: false
        },
        disabled: {
          type: [String, Boolean],
          default: false
        },
        align: {
          type: String,
          validator (val) {
            return oneOf(val, ['left', 'right'])
          },
          default: 'left'
        },
        label: [String, Number, Boolean]
      },
      data () {
        return {
          checkedStatus: this.checked
        }
      },
      computed: {
        iconClass () {
          return [
            'icon',
            {
              'icon-checked': this.checkedStatus,
              'icon-check-empty': !this.checkedStatus
            }
          ]
        }
      },
      methods: {
        toggle () {
          if(this.disabled){
            return
          }
          this.checkedStatus = !this.checkedStatus
         // this.$emit('input', this.checkedStatus)
          this.$emit('on-change', this.checkedStatus)
        }
      },
      watch: {
        checked (val) {
          this.checkedStatus = val
        }
      }
    }
</script>
<style>
  .checkbox-inline{
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    user-select: none;
  }
  .checkbox-icon{
    position: relative;
    display: inline-block;
    height: 16px;
    width: 16px;
  }
  .checkbox-icon >.icon{
    position: absolute;
    font-size: 16px;
    left: 0px;
    top: 3px;
  }
  .checkbox-label{
    user-select: none;
  }
</style>
