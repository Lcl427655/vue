<template>
  <div class="index-header">
    <mt-header :title="title">
      <!--router-link的tag属性可以改成基本标签，不写的话默认为a标签，tag="buuton",tag="ul"-->
      <router-link to="/home" slot="left">
        <mt-button icon="back" v-show="back" @click="backUp">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default {
    props: {
      back: {
        type: Boolean,
        default: false
      },
      title:{}
    },
    data() {
      return {}
    },
    methods: {
      backUp(){
        history.go(-1);
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .index-header{
    z-index: 5000;
  }
</style>
