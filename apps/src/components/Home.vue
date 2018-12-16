<template>
  <div>
    <!--顶部导航-->
    <index-header :back="false" :title="title">
      <slot></slot>
    </index-header>
    <!--内容区域-->
    <div class="index-content">
      <!--轮播图-->
      <!--将轮播图数据传递给轮播图组件-->
      <index-swipe :swiperSlides="sliders"></index-swipe>
      <!--热门下载-->
      <hot-down :infos="downs"></hot-down>
    </div>
  </div>
</template>
<script>
  import IndexHeader from '../baseComponents/IndexHeader'
  import IndexSwipe from '../baseComponents/IndexSwipe'
  import HotDown from '../components/info/HotDown'
  //index.js可以省略
  import {getSliders,getHotDowns} from '../api'
  export default {
    data() {
      return {
        sliders: [],
        downs:[],
        title:'首页'
      }
    },
    //语法糖
    created() {
      //获取轮播图
      this.getSlider();
      //获取链接
      this.getHotDown();
    },
    methods: {
      async getSlider() {
        //起别名,data(不能改):名字
        //let {data: sliders} = await getSliders();
        //this.sliders = sliders;
        this.sliders = await getSliders();
      },
      async getHotDown(){
        this.downs= await getHotDowns();
      }
    },
    computed: {},
    components: {
      'index-header': IndexHeader,
      'index-swipe': IndexSwipe,
      'hot-down':HotDown
    }
  }
</script>
<style scoped>

</style>
