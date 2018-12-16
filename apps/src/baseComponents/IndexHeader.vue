<template>
  <div>
    <mt-header :title="title">
      <router-link to="/home" slot="left">
        <mt-button icon="back" v-show="back" @click="backUp">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--<mt-header title="multiple button">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
        <mt-button @click="handleClose">close</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
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
<style scoped>

</style>
