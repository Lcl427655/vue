import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import Less from 'less'
Vue.use(Less)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import './assets/icon/iconfont.css'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
