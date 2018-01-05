
<template>
  <div id="me" class="panel panel-default">
    <div class="panel-heading">子组件Demo</div>
    <div class="panel-body">
      <div><label>单向绑定</label>：<input type="text" :value="your"/></div><!--单向绑定-->
      <div><label>双向绑定</label>：<input type='text' v-model="message"/></div><!--双向绑定-->
      <div>实时结果:{{message}}</div>
      <button class="btn btn-info" @click="notify">通知父组件</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'me',
    data () {
      return {
        message: 'plase input'
      }
    },
    props: ['your'],
    watch: {
      your: function (val, oldVal) {
        console.log('The props[your] has changed')
      },
      message: function (val, oldVal) {
        console.log('The props[message] has changed')
      }
    },
    methods: {
      notify: function () {
        this.$emit('me-post', this.message)
      }
    },
    beforeCreated: function () {
      console.log('beforeCreated')
    },
    created: function (o) {
      console.log('created')
    },
    beforeMounted: function () {

    },
    mounted () {

    }
  }
</script>
<style scoped>
  #me {
    width: 300px;
    margin: 10px auto;
  }
</style>
