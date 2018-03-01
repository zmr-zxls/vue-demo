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
            <li>
              <ISwitch v-model="showModal" on="开" off="关"></ISwitch>
            </li>
            <li>
              <Checkbox :checked="showModal" label="checkbox控件" align="right"></Checkbox>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <grid-demo></grid-demo>
    <modal :status="showModal" v-on:modal-ok="showModal=false" v-on:modal-close="showModal=false" okText="确定" size="sm" modalTitle = "检索">
        <form onsubmit="return false;" style="margin-bottom: 8px;">
          <IconInput icon="search" v-model="keywords" placeholder="输入检索"></IconInput>
        </form>
        <datatable :data="showData" :columns="gridColumns"></datatable>
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
        showModal: false,
        keywords: '',
        gridColumns: ['name', 'power'],
        gridData:[
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 }
        ]
      }
    },
    computed: {
      showData () {
        if (this.keywords) {
           let keyword = this.keywords.toLowerCase()
           return this.gridData.filter(v => {
              return v.name.toLowerCase().indexOf(keyword) > -1 || v.power.toString().indexOf(keyword) > -1
           })
        } else {
          return this.gridData
        }
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
