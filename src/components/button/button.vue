<template>
  <button :type="type" :class="btnCls" @click="btnClick">
    <template v-if="right">
      <slot></slot>
      <i :class="iconCls" v-if="icon"></i>
    </template>
    <template v-else>
      <i :class="iconCls" v-if="icon"></i>
      <slot></slot>
    </template>
  </button>
</template>

<script>
    export default {
      name: 'IButton',
      props: {
        type: {
          type: String,
          default: 'default'
        },
        icon: String,
        right: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {}
      },
      computed: {
        btnCls () {
          return [
            'btn',
            {
              'btn-default': this.type === 'default',
              'btn-primary': this.type === 'primary',
              'btn-info': this.type === 'info',
              'btn-danger': this.type === 'danger'
            }
          ]
        },
        iconCls () {
          let icon = {}
          if (this.icon) {
            icon['icon-' + this.icon] = true
            return ['icon', icon]
          } else {
            return 'icon'
          }
        }
      },
      methods: {
        btnClick () {
          this.$emit('click')
        }
      }
    }
</script>
