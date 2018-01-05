<template>
  <form class="form" :style="{'width': formWidth}" onsubmit="return false;">
    <div class="form-group">
      <IconInput icon="user" v-model="username"></IconInput>
    </div>
    <div class="form-group">
      <IconInput type="password" icon="lock" v-model="password"></IconInput>
    </div>
    <div class="form-group">
      <Select class="select-form" v-model="unitId">
        <Option value="1">单位1号</Option>
        <Option value="2">单位2号</Option>
        <Option value="3">单位3号</Option>
        <Option value="4">单位4号</Option>
        <Option value="5">单位5号</Option>
        <Option value="6">单位6号</Option>
      </Select>
    </div>
    <div class="form-group" :show="!status1 || !status2" style="text-align: left;color:#ff0000">{{tips}}</div>
    <div class="form-group">
      <button @click="submit" class="btn btn-primary">提交</button>
    </div>
  </form>
</template>

<script>
  import User from '../js/user'
  export default {
    name: 'login',
    props: {
      width: {
        type: [Number, String],
        default: 300
      }
    },
    computed: {
      formWidth () {
        if (isNaN(this.width)) {
          return this.width
        }
        return this.width + 'px'
      }
    },
    data () {
      return {
        username: 'test',
        password: 'haha',
        unitId: '2',
        tips: null,
        status1: true,
        status2: true
      }
    },
    watch: {
      username: function () {
        if (this.isEmptyText(this.username)) {
          this.tips = '用户名不能为空'
          this.status1 = false
        } else {
          this.status1 = true
        }
      },
      password: function () {
        if (this.isEmptyText(this.password)) {
          this.tips = '密码不能为空'
          this.status2 = false
        } else {
          this.tips = ''
          this.status2 = true
        }
      }
    },
    methods: {
      isEmptyText: function (str) {
        if (!str) {
          return true
        }
        return str.trim() === ''
      },
      submit: function () {
        var user = new User(this.username, this.password)
        if (this.status1 && this.status2) {
          user.login(function (msg) {
            if (!msg.flag) {
              this.tips = '密码错误'
            } else {
            }
          })
        }
      }
    }
  }
</script>

<style>
  .form {
    margin: auto;
  }
  .form .btn{
    display: block;
    width: 100%;
  }
  .pwd-error {
    border-color: red;
  }
  .select-form, .select-form >.btn{
    display: block;
    width: 100%;
  }
</style>
