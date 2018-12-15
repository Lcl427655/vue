import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import List from '../components/List.vue';
//引入router必须先要use一下，变成全局组件
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List}
    ]
});