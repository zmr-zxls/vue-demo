/**
 * Created by chenhaijun3 on 2017/11/13.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/Main'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/Login'], resolve)
    },
    {
      name: 'demo',
      path: '/demo',
      component: resolve => require(['../components/DemoNav'], resolve),
      redirect: '/demo/login',
      children: [
        {
          name: 'modal',
          path: 'modal',
          component: resolve => require(['../components/ModalDemo'], resolve)
        },
        {
          name: 'innerLogin',
          path: 'login',
          component: resolve => require(['../components/Login'], resolve)
        },
        {
          name: 'grid',
          path: 'grid',
          component: resolve => require(['../components/GridDemo'], resolve)
        }
      ]
    }
  ]
})
