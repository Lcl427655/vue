//commonjs语法导入模块
let stra = require('./a.js');
console.log(stra);

//es6语法导入(尽量不要混用)
import strb from './b.js';
console.log(strb);

//node中的import和require的区别

let ff = a => b => c => a+b+c;
console.log(ff(1)(2)(3));

//ES7语法
let o1 = {school:'o1'};
let o2 = {school:'o2'};
let oo = {...o1,...o2};
console.log(oo);

import './index.css';//引入css
import './style.less';//引入less

let img = new Image();
img.src='./1.jpg';//webpack会认为他是个字符串，打包之后图片没有，所以使用import或者一个线上路径
//可以使用下边的方式
import page from './1.jpg';
img.src=page;
document.body.appendChild(img);

//导入Vue
import Vue from 'vue';
//可以使用下边的方式引入compiler
//import Vue from 'vue/dist/vue.js';
//这样引用的是vue.runtime.common.js，而不是html中嵌入的vue.js
//vue的组成：compiler(编译模板用的，没有的话template不能编译) + runtime

//vue-loader的作用就是将.vue变为模块
import App from './App.vue';
console.log(App);

new Vue({
    //render函数的作用是将虚拟的dom渲染成真实的dom
    //createElement返回的是虚拟的dom
    /*render:function (createElement) {
        return createElement('h1','Hello');
    }*/
    render:(e) => e(App)
}).$mount('#app');