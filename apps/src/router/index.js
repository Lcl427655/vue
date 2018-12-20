import Vue from 'vue'
import Router from 'vue-router'

//@也可以，代表根目录，缺点无法点进去
//优化使用coding split
/*import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import MyInfo from '../components/MyInfo.vue'
import CustomService from '../components/CustomService'
import Error from '../components/Error.vue'
import DetailDown from '../components/detail/DetailDown';*/

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../components/Home.vue'),//Home,
      meta: {keepAlive: true}
      },//meta名字固定，路由元信息，$route.meta.keepAlive获取
    {
      path: '/add',
      component: () => import('../components/Add.vue'),//Add
    },
    {
      path: '/list',
      component: () => import('../components/List.vue'),//List
    },
    {
      path: '/my',
      component: () => import('../components/MyInfo.vue'),//MyInfo
    },
    {
      path: '/customService',
      component: () => import('../components/CustomService.vue'),//CustomService
    },
    {
      path: '/detailDown/:id',
      component: () => import('../components/detail/DetailDown.vue'),//DetailDown,
      name: 'detailDown'
    },
    {
      path: '*',
      component: () => import('../components/Error.vue'),//Error
    },
  ]
})
