<template>
    <div :class="['dropdown-menu',{'open': isOpen}]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
      name: 'drop',
      props: {
        isOpen: Boolean
      },
      data () {
        return {}
      }
    }
</script>
