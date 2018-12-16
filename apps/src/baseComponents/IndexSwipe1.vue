<template>
  <div>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in items" :key="item.id">
          <a :href="item.href" rel="external nofollow">
           <img :src="item.url" class="img"/>
           <span class="desc">1111</span>
          </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import {Swipe, SwipeItem} from 'mint-ui'
  export default {
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item': SwipeItem
    },
    data() {
      return {
        items: [{
          title: '你的名字',
          href: 'http://google.com', url: 'http://pic28.photophoto.cn/20130818/0020033143720852_b.jpg'
        }, {
          title: '我的名字',
          href: 'http://baidu.com', url: '../assets/swipe/2.jpg'
        }]
      }
    }
  }
</script>
<style scoped>
   img {
     width: 100%;
  }

   .mint-swipe {
     height: 218px;
  }

   .desc {
     font-weight: 600;
     opacity: .9;
     padding: 5px;
     height: 20px;
     line-height: 20px;
     width: 100%;
     color: #fff;
     background-color: gray;
     position: absolute;
     bottom: 0;
  }
</style>
