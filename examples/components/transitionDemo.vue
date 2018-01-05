<template>
  <div>
     <button class="btn btn-primary" @click="show = !show">toggle render</button>
     <transition-group name="slide-fade">
        <p v-if="show" key="1">Me1</p>
        <p v-if="show" key="2">Me2</p>
     </transition-group>
  </div>
</template>

<script>
    export default {
      name: 'tran',
      data () {
        return {
          show: true
        }
      }
    }
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active{
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>
