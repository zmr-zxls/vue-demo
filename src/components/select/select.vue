<template>
  <div :class="selectCls" v-clickoutside="hideMenu">
    <IButton class="dropdown-toggle" icon="caret-down" right v-on:click="onClick">
      <span class="filter-option pull-left">{{selectedOptionText}}</span>
    </IButton>
    <input type="hidden" :value="model"/>
    <div :class="['dropdown-menu',{'open': isOpen}]">
      <ul class="dropdown-menu inner selectpicker">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
    import Emitter from '@/mixins/emitter'
    import clickoutside from '@/directives/clickOutside'
    export default {
      name: 'Select',
      mixins: [ Emitter ],
      directives: { clickoutside },
      props: {
        value: [String, Number],
        className: String
      },
      data () {
        return {
          model: this.value,
          selectedOptionText: '',
          isOpen: false,
          optionInstance: []
        }
      },
      watch: {
        value (val) {
          this.model = val
        },
        model (val) {
          this.$emit('input', val)
        }
      },
      beforeMount () {
        this.$on('option-append', install => {
          this.optionInstance.push(install)
        })
        this.$on('option-remove', install => {
          let index = this.findOption(install.value, true)
          if (index > -1) {
            this.optionInstance.splice(index, 1)
          }
        })
      },
      mounted () {
        this.$on('option-select', data => {
          this.model = data.value
          this.selectedOptionText = data.text
          this.broadcast('Option', 'option-select-change', data)
          this.$emit('on-change', data.value)
          this.hideMenu()
        })
        this.setSelectValue(this.value)
      },
      computed: {
        selectCls () {
          let staticCls = ['btn-group', 'vc-selectpicker']
          if (this.isOpen) {
            staticCls.push('open')
          }
          return staticCls
        }
      },
      methods: {
        onClick () {
          this.isOpen = !this.isOpen
        },
        setSelectValue (value) {
          let child
          if (this.optionInstance.length) {
            if (value) {
              child = this.findOption(value)
            }
            if (!child) {
              child = this.optionInstance[0]
            }
            child.selected = true
            this.model = child.value
            this.selectedOptionText = child.getLabel()
          }
        },
        findOption (value, isIndex = false) {
          let ret = isIndex ? -1 : null
          this.optionInstance.forEach((option, index) => {
            if (option.value === value) {
              ret = isIndex ? index : option
              return false
            }
          })
          return ret
        },

        hideMenu () {
          this.isOpen = false
        }
      }
    }
</script>

<style>
  .vc-selectpicker .dropdown-menu > .inner{
    position: static;
    border: 0;
    padding: 0;
    margin: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .vc-selectpicker .dropdown-menu {
    min-width: 100%;
  }

  .vc-selectpicker .btn-group {
    float: none;
    display: inline-block;
    margin-left: 0;
  }
  .vc-selectpicker .btn .icon{
    position: absolute;
    top: 50%;
    right: 2px;
    margin-top: -6px;
    vertical-align: middle
  }
  .dropdown-menu li{
    display: block;
    margin: 0px;
  }
  .dropdown-menu li a{
    cursor: pointer;
  }
  .dropdown-menu li.selected >a {
    color: #fff;
    text-decoration: none;
    background-color: #3280fc
  }
</style>
