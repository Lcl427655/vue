<template>
  <div class="index-footer">
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/customService">
      <i class="iconfont icon-kefu"></i>
      <span>客服</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-add"></i>
      <span>添加</span>
    </router-link>
    <router-link to="/my">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      toHome() {
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .index-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    display: flex;
    background-color: #e9ecef;
    a {
      color: #005cbf;
      display: flex;
      flex: 1; //flex布局，每个占一份
      flex-direction: column;
      align-items: center;
      justify-self: center;
      text-decoration: none;
    }
    a.router-link-active {
      color: red;
    }
  }
</style>
