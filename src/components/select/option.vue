<template>
  <li :class="['select-option', {'selected': selected}]" @click.stop="onSelected">
    <a>
      <span class="text"><slot>{{showLabel}}</slot></span>
    </a>
  </li>
</template>

<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'Option',
    mixins: [ Emitter ],
    props: {
      value: {
        require: true,
        type: [String, Number],
        default: ''
      },
      label: [String, Number, Array]
    },
    data () {
      return {
        selected: false
      }
    },
    mounted () {
      this.$on('option-select-change', data => {
        this.selected = (this.value === data.value)
      })
      this.dispatch('Select', 'option-append', this)
    },
    methods: {
      onSelected () {
        this.dispatch('Select', 'option-select', {
          value: this.value,
          text: this.getLabel()
        })
      },
      getLabel () {
        let ret = ''
        if (this.label) {
          ret = this.label
        } else if (this.$slots.default.length) {
          ret = this.$slots.default[0].text
        }
        return ret
      }
    },
    computed: {
      showLabel () {
        return this.label ? this.label : this.value
      }
    },
    beforeDestroy () {
      this.dispatch('Select', 'option-remove', this)
    }
  }
</script>
