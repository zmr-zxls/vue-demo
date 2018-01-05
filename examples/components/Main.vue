<template>
  <div>
    <nav class="navbar" role="navigation">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <button class="btn btn-primary" id="show-modal" @click="showModal = true">打开对话框</button>
            </li>
            <li>
              <Select value="3">
                <Option value="1">hello</Option>
                <Option value="2">hello world2</Option>
                <Option value="3">hello world2</Option>
                <Option value="4">hello world3</Option>
                <Option value="5">hello world4</Option>
                <Option value="6">hello world5</Option>
              </Select>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <grid-demo></grid-demo>

    <modal :status="showModal" v-on:modal-ok="showModal=false">
      <h3 slot="header">Modal</h3>
      <div slot="body">Vue Modal Components</div>
    </modal>
  </div>
</template>

<script>
  import GridDemo from './GridDemo.vue'
  export default {
    name: 'Main',
    components: { GridDemo },
    data () {
      return {
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
    }
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
