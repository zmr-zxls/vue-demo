<template>
    <ul class="menu" :active-name="currentActiveName">
      <slot></slot>
    </ul>
</template>

<script>
    import Emitter from '@/mixins/emitter'
    export default {
      name: 'menu',
      mixins: [Emitter],
      props: {
        activeName: String
      },
      data () {
        return {
          currentActiveName: this.activeName
        }
      },
      watch: {
        activeName () {
          this.currentActiveName = this.activeName
          this.notifyChild()
        }
      },
      mounted () {
        if (this.activeName) {
          this.notifyChild()
        }
        this.$on('on-menu-select', name => {
          this.currentActiveName = name
          this.$emit('on-select', name)
          this.notifyChild()
        })
      },
      methods: {
        notifyChild () {
          // 广播，通知子组件：子组件名， 事件名， 数据
          this.broadcast('menuItem', 'on-menu-item-change', this.currentActiveName)
        }
      }
    }
</script>
