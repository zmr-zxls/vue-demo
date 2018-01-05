<template>
  <div class="panel" id="demo" style="width: 300px;margin: 10px auto;">
    <div class="panel-heading">子组件Me</div>
    <h1>{{intro}}</h1>
    <h3>author: {{authorName}}</h3>
  </div>
</template>

<script>
  export default {
    name: 'demo',
    props: ['authorName'],
    data () {
      return {
        intro: 'my first vue demo'
      }
    }
  }
</script>
