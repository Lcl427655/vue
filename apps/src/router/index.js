import Vue from 'vue'
import Router from 'vue-router'

//@也可以，代表根目录，缺点无法点进去
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import MyInfo from '../components/MyInfo.vue'
import CustomService from '../components/CustomService'
import Error from '../components/Error.vue'
import DetailDown from '../components/detail/DetailDown';

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/add',component:Add},
    {path:'/list',component:List},
    {path:'/my',component:MyInfo},
    {path:'/customService',component:CustomService},
    {path:'/detailDown/:id',component:DetailDown,name:'detailDown'},
    {path:'*',component:Error},
  ]
})
