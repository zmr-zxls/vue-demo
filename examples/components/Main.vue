<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>

    <me authorName="chenhaijun3"></me>
    <button class="btn btn-primary" id="show-modal" @click="showModal = true">Show Modal</button>
    <button class="btn btn-danger" @click="notify">通知子组件</button>
    <demo :your="msg" v-on:me-post="recive"></demo>


    <modal :status="showModal" v-on:modal-ok="showModal=false">
      <h3 slot="header">Modal</h3>
      <div slot="body">Vue Modal Components</div>
    </modal>
    <Select value="3">
      <Option value="1">hello</Option>
      <Option value="2">hello world2</Option>
      <Option value="3">hello world2</Option>
      <Option value="4">hello world3</Option>
      <Option value="5">hello world4</Option>
      <Option value="6">hello world5</Option>
    </Select>
   <!-- <tran></tran>-->

  <!--  <me :your="msg"></me>-->
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import demo from './Demo.vue'
  import me from './Me.vue'
  import tran from './transitionDemo.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showModal: false
      }
    },
    methods: {
      notify: function () {
        this.msg = Math.random()
      },
      recive: function (msg) {
        alert(msg)
      }
    },
    components: { demo, me, tran }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hello {
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
