<template>
    <div>
      <button @click="showModal=true" class="btn btn-primary">Open Modal Dialog</button>
      <Modal ref="modal" :status="showModal" modalTitle = "登录" v-on:modal-ok="showModal=false"  v-on:modal-close="showModal=false">
        <Login slot="body" width="auto"></Login>
      </Modal>
    </div>
</template>

<script>
  import Login from './Login.vue'
  export default {
    name: 'modalDemo',
    components: {Login},
    data () {
      return {
        showModal: false
      }
    },
    methods: {

    }
  }
</script>
