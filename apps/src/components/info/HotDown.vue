<template>
    <div id="container">
      <ul>
        <li v-for="info in infos">
          <img v-lazy.container="info.imageUrl">
          <div>{{info.title}}</div>
        </li>
      </ul>
    </div>
</template>
<script>
  import Vue from 'vue';
  import {Lazyload} from 'mint-ui';

  Vue.use(Lazyload);
  export default {
    data() {
      return {}
    },
    props: [
      'infos'
    ],
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  #container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap;//换行
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        width: 40%;
        background-color: #e9ecef;
        border-radius: 10%;
        margin: 5%;
        padding: 5%;
        img{
          margin: 5%;
          width: 50%;
          height: 70%;
        }
      }
    }
  }
</style>
