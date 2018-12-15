import Vue from 'vue';
import App from './App.vue';
//此处也可以使用index.js,import router from './router',默认去找index.js
import router from './router/router.js';
new Vue({
    router,
    render:(e) => e(App)
}).$mount('#app');