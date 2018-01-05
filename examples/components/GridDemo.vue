<template>
  <div>
    <form onsubmit="return false;" style="float: left;margin-right: 6px;">
      <div class="input-group form-group">
        <input type="text" class="form-control" v-model="keywords" placeholder="输入检索"/>
      </div>
    </form>
    <IButton class="pull-left" icon="plus" v-on:click="showAddModal = true">添加</IButton>
    <Datatable :data="tableData" :columns="gridColumns"></Datatable>
    <Modal :status="showAddModal" modalTitle = "添加" size="sm" v-on:modal-ok="addRow" v-on:modal-close="clearAddData">
      <form slot="body">
        <div class="input-group form-group">
         <span class="input-group-addon">姓名</span>
         <input v-focus class="form-control" v-model="name"/>
        </div>
        <div class="input-group form-group">
          <span class="input-group-addon">力量</span>
          <input class="form-control" v-model="power"/>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
  import focus from '../directives/focus'
  var vueConfig = {
    name: 'GridDemo',
    directives: { focus },
    data () {
      return {
        keywords: '',
        gridColumns: ['name', 'power'],
        gridData: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 },
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 },
          { name: 'Ha len', power: 8000 }
        ],
        name: null,
        power: null,
        showAddModal: false
      }
    },
    computed: {
      tableData () {
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
      addRow () {
        if (this.name && this.power) {
          this.gridData.push({
            name: this.name,
            power: this.power
          })
        }
        this.clearAddData()
      },
      clearAddData () {
        this.name = ''
        this.power = ''
        this.showAddModal = false
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('route enter GridDemo')
      next()
    },
    created () {
      if (this.$route) {
        this.keywords = this.$route.query.key
      }
      console.log('GridDemo component created')
    },
    beforeCreate () {
      console.log('GridDemo component beforeCreate')
    },
    beforeMount () {
      console.log('GridDemo component beforeMount')
    },
    mounted () {
      console.log('GridDemo component mounted')
    }
  }
  export default vueConfig
</script>
