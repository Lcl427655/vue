<template>
  <div id="app">
    <index-footer></index-footer>
    <router-view/>
  </div>
</template>

<script>
import IndexFooter from './baseComponents/IndexFooter.vue'
export default {
  name: 'App',
  components:{
    'index-footer':IndexFooter
  }
}
</script>

<style>
  /***1: 初始样式设置*******/
  html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img, div,span, table,th,tr,td,button { margin:0; padding:0; }
  ul, ol {
    list-style: none;
  }
  .hide {
    display: none;
  }
  /*******2: 清除浮动******/
  /*IE6, IE7 生效*/
  .floatfix{
    *zoom:1;
  }
  /*其他浏览器*/
  .floatfix:after{
    content:"";
    display:table;
    clear:both;
  }
  /***3: 超出长度显示省略号. 还需要设置width**/
  .ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  /****4: 兼容的 不继承 的透明度*****/
  .rgba {
    background: rgb(0,0,0); /*The Fallback color,这里也可以使用一张图片来代替*/
    background: rgba(0, 0, 0,0.5);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr=#80000000,endColorstr=#80000000)"; /*Filter for IE8 */
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr=#80000000, endColorstr=#80000000); /*Filter for older IEs */
  }
</style>
