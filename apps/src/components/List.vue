<template>
  <div class="list-info">
    <index-header :back="true" :title="title">
      <slot></slot>
    </index-header>
    <div class="container">
      <table class="table text-center">
        <thead>
        <tr>
          <th class="th-info-1"><input type="checkbox" v-model="flag" class="">全选</th>
          <th class="th-info-2">标题</th>
          <th class="th-info-3">缩略图</th>
          <th class="th-info-4">描述</th>
          <th class="th-info-5">详情</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(info,index) in hrefDownInfos">
          <td>
            <input type="checkbox" v-model="flag" class="">
          </td>
          <td>
            {{info.title}}
          </td>
          <td>
            <img :src="info.imageUrl" :alt="info.downloadUrl" width="50px" height="50px">
          </td>
          <td>{{info.detailInfo}}</td>
          <td><i class="iconfont icon-xiangqing"></i></td>
        </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5">
              <pagination :total="total" :current-page='current' @pagechange="pagechange"></pagination>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
  import IndexHeader from '../baseComponents/IndexHeader';
  import {getHrefDowns} from '../api';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Pagination from '../baseComponents/Pagination'
  export default {
    data() {
      return {
        title: '列表页',
        hrefDownInfos: [],
        flag: false,
        total: 150,     // 记录总条数
        display: 4,   // 每页显示条数
        current: 1,   // 当前的页数
      }
    },
    created() {
      //获取列表详情
      this.getHrefDown();
    },
    methods: {
      async getHrefDown() {
        this.hrefDownInfos = await getHrefDowns();
      },
      pagechange:function(currentPage){
        console.log(currentPage);
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
      }
    },
    computed: {},
    components: {
      'index-header': IndexHeader,
      'pagination':Pagination
    }
  }
</script>
<style scoped lang="less">
  .list-info {
    .th-info-1 {
      width: 20%;
    }
    .th-info-2 {
      width: 20%;
    }
    .th-info-3 {
      width: 20%;
    }
    .th-info-4 {
      width: 20%;
    }
    .th-info-5 {
      width: 20%;
    }
    tr td{
      margin: 0 auto;
      vertical-align: middle;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
</style>
