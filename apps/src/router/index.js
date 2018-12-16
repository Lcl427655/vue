import Vue from 'vue'
import Router from 'vue-router'

//@也可以，代表根目录，缺点无法点进去
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Star from '../components/Star.vue'
import Error from '@/components/Error.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/add',component:Add},
    {path:'/list',component:List},
    {path:'/star',component:Star},
    {path:'*',component:Error},
  ]
})
