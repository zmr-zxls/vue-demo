<template>
    <div class="input-group">
      <span class="input-group-addon" v-if="prepend"><slot name="prepend"></slot></span>
      <input :class="className"
             :type="type"
             :name="name"
             :value="currentValue"
             :placeholder="placeholder"
             @input="handleInput"
             @blur="handleBlur">
    </div>
</template>

<script>
    export default {
      name: 'input',
      data () {
        return {}
      }
    }
</script>
