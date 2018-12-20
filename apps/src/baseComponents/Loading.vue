<template>
  <div class="index-loading">
    <div v-if="loading" class="loading">
      <div class="spinner">
        <mt-spinner type="snake" :size="60" color="#26a2ff"></mt-spinner>
      </div>
    </div>
    <!--用template包裹，不影响原有结构-->
    <template v-else="loading">
      <slot></slot>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    props:{
      loading:{}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
  .index-loading{
    .loading {
      background-color: #FCFCFC;
      width: 100%;
      height: 100%;
      .spinner {
        width: 60px;
        height: 60px;
        position: fixed;
        left:47%;
        top: 47%;
      }
    }
  }
</style>
