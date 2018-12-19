<template>
  <div class="add-down">
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
          <td><input type="text" v-model="hrefDownInfo.hrefDownTitle" class="bd"></td>
        </tr>
        <tr>
          <td>详情</td>
          <td><textarea v-model="hrefDownInfo.hrefDownDetailInfo" cols="10" rows="10" class="bd"></textarea></td>
        </tr>
        <tr>
          <td>图片</td>
          <td><div id="app">
            <file-upload></file-upload>
          </div>
          </td>
        </tr>
        <tr>
          <td>链接</td>
          <!--注意：如果是数字，需加上v-model.number-->
          <td><input type="text" v-model="hrefDownInfo.hrefDownImageUrl" class="bd"></td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="2">
            <mt-button type="danger" size="small" @click="save">保存</mt-button>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
import IndexHeader from '../baseComponents/IndexHeader';
import FileUpload from '../baseComponents/FileUpload'
export default {
  data() {
    return {
      title: '添加',
      hrefDownInfo:{
        hrefDownTitle:'11',
        hrefDownDetailInfo:'22',
        hrefDowndDwnloadUrl:'33',
        hrefDownImageUrl:'44'
      }
    }
  },
  methods: {
    save(){

    }
  },
  computed: {},
  components: {
    'index-header':IndexHeader,
    'file-upload':FileUpload
  }
}
</script>
<style scoped lang="less">
  .add-down{
    thead tr th:first-child{
      width: 30%;
    }
    .bd{
      width: 100%;
      border:solid 1px blue;
    }
  }
</style>
