<template>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th v-for="key in columns" @click="sortBy(key)" :class="{active: sortKey==key}">
        {{key|capitalize}}
        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'desc' "></span>
      </th>
    </tr>
    </thead>
    <tbody @dblclick="dblclickRow">
    <tr v-for="entry in data" :id="entry['name']">
      <td v-for="key in columns">{{entry[key]}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'datatable',
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value && value !== 0) {
          return ''
        }
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] *= -1
        var that = this
        this.data.sort(function (a, b) {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return (a[key] - b[key]) * that.sortOrders[key]
          }
          return that.compareString(a[key], b[key]) * that.sortOrders[key]
        })
      },
      compareString: function (s1, s2) {
        var charCode1
        var charCode2
        var len = s1.length
        for (var i = 0; i < len; i++) {
          if (!s2.charAt(i)) {
            return 1
          }
          charCode1 = s1.charCodeAt(i)
          charCode2 = s2.charCodeAt(i)
          if (charCode2 === charCode1) {
            continue
          } else if (charCode1 < charCode2) {
            return 1
          } else {
            return -1
          }
        }
        return -1
      },
      dblclickRow (e) {
      }
    },
    beforeUpdate: function () {
      console.log('Datatable beforeUpdate...')
    },
    beforeCreate () {
      console.log('Datatable beforeCreate')
    },
    created () {
      console.log('Datatable created')
    },
    beforeMount () {
      console.log('Datatable beforeMount')
    },
    mounted () {
      console.log('Datatable mounted in dom')
    },
    updated () {
      console.log('Datatable updated...')
    }
  }
</script>
<style>
  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }
  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid black;
  }
  .arrow.desc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid black;
  }
</style>
