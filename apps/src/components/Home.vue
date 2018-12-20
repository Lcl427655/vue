<template>
  <div class="index-nome">
    <!--顶部导航-->
    <index-header :back="false" :title="title">
      <slot></slot>
    </index-header>
    <!--内容区域-->
    <div class="index-content">
      <loading :loading="loading">
        <!--轮播图-->
        <!--将轮播图数据传递给轮播图组件-->
        <index-swipe :swiperSlides="sliders"></index-swipe>
        <!--热门下载-->
        <hot-down :infos="downs"></hot-down>
      </loading>
    </div>
  </div>
</template>
<script>
  import IndexHeader from '../baseComponents/IndexHeader';
  import IndexSwipe from '../baseComponents/IndexSwipe';
  import HotDown from '../components/info/HotDown';
  import Loading from '../baseComponents/Loading';
  //index.js可以省略
  import {getSliders, getHotDowns, getHomeAll} from '../api'

  export default {
    data() {
      return {
        sliders: [],
        downs: [],
        title: '首页',
        loading: true
      }
    },
    //语法糖
    created() {
      //获取轮播图
      //this.getSlider();
      //获取链接
      //this.getHotDown();
      //以上两个方法可以用一个方法来替换
      this.getAllData();
    },
    methods: {
      //async getSlider() {
      //起别名,data(不能改):名字
      //let {data: sliders} = await getSliders();
      //this.sliders = sliders;
      //this.sliders = await getSliders();
      //},
      //async getHotDown(){
      //this.downs= await getHotDowns();
      //}
      async getAllData() {
        let [sliders, downs] = await getHomeAll();
        this.sliders = sliders;
        this.downs = downs;
        this.loading = false;
      }
    },
    computed: {},
    components: {
      'index-header': IndexHeader,
      'index-swipe': IndexSwipe,
      'hot-down': HotDown,
      'loading': Loading
    }
  }
</script>
<style scoped lang="less">

</style>
