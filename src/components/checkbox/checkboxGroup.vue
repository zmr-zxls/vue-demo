<template>
    <div class="checkbox-group">
      <input type="hidden" :value="value" :name="name"/>
      <slot name="checkbox"></slot>
    </div>
</template>

<script>
    import Emitter from '../../mixins/emitter'
    export default {
      name: 'CheckboxGroup',
      mixins: [ Emitter ],
      props: {
        value: [String, Number, Boolean, Array],
        name: [String, Number]
      },
      data () {
        return {}
      }
    }
</script>
