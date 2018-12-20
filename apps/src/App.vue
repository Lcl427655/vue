<template>
  <div id="app">
    <index-footer></index-footer>

    <transition name="fadeIn">
      <keep-alive>
        <!--需要缓存的数据-->
        <router-view v-show="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <!--无需缓存的数据-->
      <router-view v-show="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  import IndexFooter from './baseComponents/IndexFooter.vue'

  export default {
    name: 'App',
    components: {
      'index-footer': IndexFooter
    }
  }
</script>

<style>
  html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
  }

  body {
    font-family: "Microsoft YaHei";
    font-size: 14px;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  ul, ol {
    list-style: none;
  }

  img {
    border: none;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: #232323;
  }

  table {
    border-collapse: collapse;
    table-layout: fixed;
  }

  input, textarea {
    outline: none;
    border: none;
  }

  textarea {
    resize: none;
    overflow: auto;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow: hidden;
  }

  .fl {
    float: left
  }

  .fr {
    float: right
  }

  .tl {
    text-align: left;
  }

  .tc {
    text-align: center
  }

  .tr {
    text-align: right;
  }

  .ellipse {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .inline {
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }

  .index-content {
    position: fixed;
    top: 40px;
    bottom: 45px;
    width: 100%;
    overflow: auto;
    touch-action: none;
  }

  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 1s linear;
  }
  .fadeIn-leave-active{
    transition: all 1s linear;
    opacity: 0;
  }
</style>
