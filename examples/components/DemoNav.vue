<template>
  <div>
    <ul class="nav nav-tabs">
      <router-link tag="li" active-class="active" to="/demo/login"><a>Login</a></router-link>
      <router-link tag="li" active-class="active" to="/demo/modal"><a>Modal</a></router-link>
      <router-link tag="li" active-class="active" to="/demo/grid"><a>Grid</a></router-link>
    </ul>
    <div style="padding:12px">
      <transition :name="transName">
        <router-view class="second-child"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
    import Mixin from '../mixins'
    const routeOrder = {
      login: 0,
      innerLogin: 1,
      modal: 2,
      grid: 3
    }
    export default {
      name: 'nav',
      mixins: [Mixin],
      data () {
        return {
          transName: 'slide-left'
        }
      },
      watch: {
        $route (to, from) {
          const toName = to.name
          const fromName = from.name
          this.transName = routeOrder[toName] > routeOrder[fromName] ? 'slide-left' : 'slide-right'
        }
      }
    }
</script>
<style scoped>
  .second-child{
    left: 0;
    right: 0;
    position: absolute;
    transition: all .3s ease;
  }

  .slide-left-enter, .slide-right-leave-active{
    opacity: 0;
    -webkit-transform: translate(800px, 0);
    transform: translate(800px, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter{
    opacity: 0;
    -webkit-transform: translate(-800px, 0);
    transform: translate(-800px, 0);
  }
</style>
