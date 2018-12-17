<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a href="http://www.baidu.com">
        <img :src="slide" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          observer:true,
          observeParents:true,
          pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    },
    props: {
      swiperSlides: {
        default:[]
      }
    }
  }
</script>
<style scoped lang="less">
  img{
    width: 100%;
  }
</style>
