<template>
    <span><i :class="iconClass"></i><slot></slot></span>
</template>

<script>
    export default {
      name: 'icon',
      props: {
        name: {
          require: true,
          type: String
        }
      },
      computed: {
        iconClass () {
          let iconName = 'icon-' + this.name
          return ['icon', iconName]
        }
      }
    }
</script>

<style>
  .icon{ padding-right: 2px; }
</style>
