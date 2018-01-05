<template>
   <li :class="menuItemClass" :name="name" @click="onClick"><slot></slot></li>
</template>

<script>
    import Emitter from '@/mixins/emitter'
    export default {
      name: 'menuItem',
      mixins: [Emitter],
      props: {
        name: {
          require: true,
          type: String
        }
      },
      data () {
        return {
          isActive: false
        }
      },
      mounted () {
        this.$on('on-menu-item-change', name => {
          if (this.name === name) {
            this.isActive = true
          } else {
            this.isActive = false
          }
        })
      },
      methods: {
        onClick () {
          this.isActive = true
          // this.$emit('on-menu-select', this.name)
          this.dispatch('menu', 'on-menu-select', this.name)
        }
      },
      computed: {
        menuItemClass () {
          return [
            'menu-item',
            {
              active: this.isActive
            }
          ]
        }
      }
    }
</script>
