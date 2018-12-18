<template>
  <div class="detail-down">
    <index-header :back="true" :title="title">
      <slot></slot>
    </index-header>
    <div class="container">
      <table class="table">
        <thead class="thead-light">
        <tr>
          <th>描述</th>
          <th>属性</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>标题</td>
          <td>{{hrefDownTitle}}</td>
        </tr>
        <tr>
          <td>详情</td>
          <td>{{hrefDownDetailInfo}}</td>
        </tr>
        <tr>
          <td>图片</td>
          <td><img :src="hrefDownImageUrl" alt=""></td>
        </tr>
        <tr>
          <td>链接</td>
          <!--注意：如果是数字，需加上v-model.number-->
          <td><input type="text" v-model="hrefDowndDwnloadUrl" :class="{rdl:bFlag}" :readonly="!bFlag" ref="downloadUrl"></td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2">
            <mt-button type="danger" size="small" @click="edit">修改</mt-button>
            <mt-button type="danger" size="small" @click="save">保存</mt-button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
  import IndexHeader from '../../baseComponents/IndexHeader';
  import {getHrefDown , updateHrefDown} from '../../api';
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        title: '详情',
        hrefDownInfo: {},
        bFlag: false
      }
    },
    created() {
      this.getHrefDownById();
    },
    methods: {
      async getHrefDownById() {
        this.hrefDownInfo = await getHrefDown(this.id);
        Object.keys(this.hrefDownInfo).length > 0 ? void 0 : this.$router.push('/list');
      },
      edit() {
        this.bFlag = true;
        this.$refs.downloadUrl.focus();
      },
      async save() {
        try {
          if(await updateHrefDown(this.id,this.hrefDownInfo)){
            this.bFlag = false;
            this.$refs.downloadUrl.blur();
            let instance = Toast('保存成功');
            setTimeout(() => {
              instance.close();
            }, 500);
            //或者跳转list页
          }
        }catch (e) {
          let instance = Toast('保存失败');
          setTimeout(() => {
            instance.close();
          }, 500);
        }
      }
    },
    computed: {
      id() {
        return this.$route.params.id;//id映射
      },
      hrefDownId() {//id
        return this.hrefDownInfo.id;
      },
      hrefDownTitle() {//标题
        return this.hrefDownInfo.title;
      },
      hrefDownDetailInfo() {//描述
        return this.hrefDownInfo.detailInfo;
      },
      hrefDownImageUrl() {//图片地址
        return this.hrefDownInfo.imageUrl;
      },
      hrefDowndDwnloadUrl: {
        get() {//下载链接
          return this.hrefDownInfo.downloadUrl;
        },
        set(val) {
          this.hrefDownInfo.downloadUrl = val;
        }
      }
    },
    watch:{
      //url变化之后重新刷新页面，如果数据不存在，则跳转到首页
      $route(){
        this.getHrefDownById();
      }
    },
    components: {
      'index-header': IndexHeader
    }
  }
</script>
<style scoped lang="less">
  .detail-down {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
    thead tr th:first-child {
      width: 30%;
    }
    thead tr th:last-child {
      text-align: center;
    }
    tfoot tr td button {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: center;
      align-item: center;
    }
    img {
      width: 80%;
    }
    .rdl {
      border: solid 1px #007bff;
    }
  }
</style>
