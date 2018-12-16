<template>
    <div class="index-footer">
      <mt-tabbar>
        <mt-tab-item id="home">
          <img slot="icon" src="../assets/home.png" @click="toHome">
          <router-link to="/home">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="list">
          <img slot="icon" src="../assets/list.png">
          <router-link to="/list">列表</router-link>
        </mt-tab-item>
        <mt-tab-item id="add">
          <img slot="icon" src="../assets/add.png">
          <router-link to="/add">添加</router-link>
        </mt-tab-item>
        <mt-tab-item id="star">
          <img slot="icon" src="../assets/star.png">
          <router-link to="/star">收藏</router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
      toHome(){
        location.href = '/home';
      }
    },
    computed: {},
    components: {}
}
</script>
<style scoped lang="less">
  .index-footer{
    a{
      text-decoration: none;
    }
  }
</style>
