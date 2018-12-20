<template>
  <div class="list-info">
    <index-header :back="true" :title="title">
      <slot></slot>
    </index-header>
    <div class="container">
      <table class="table text-center">
        <thead>
        <tr>
          <th class="th-info-1"><input type="checkbox" v-model="checkAll">全选</th>
          <th class="th-info-2">标题</th>
          <th class="th-info-3">缩略图</th>
          <th class="th-info-4">描述</th>
          <th class="th-info-5">详情</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="info in hrefDownInfos">
          <td>
            <input type="checkbox" v-model="info.isSelected">
          </td>
          <td>
            {{info.title}}
          </td>
          <td>
            <img :src="info.imageUrl" :alt="info.downloadUrl" width="50px" height="50px">
          </td>
          <td>{{info.detailInfo}}</td>
          <td>
            <router-link :to="{name:'detailDown',params:{id:info.id}}">
              <i class="iconfont icon-xiangqing"></i>
            </router-link>

          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="5">
            <mt-button type="danger" size="small" @click="deleteBatch">批量删除</mt-button>
          </td>
        </tr>
        <tr>
          <td colspan="5">
            <pagination :display="pageSize" :total="totalPage" :current-page='page' @pagechange="pagechange"></pagination>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
  import IndexHeader from '../baseComponents/IndexHeader';
  import {getHrefDowns, deleteHrefDown,getPageHrefInfos} from '../api';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Pagination from '../baseComponents/Pagination';
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        title: '列表页',
        hrefDownInfos: [],//列表所有数据
        hrefDownInfosCheck: [],//选中的数据
        deleteFlag: false,//删除结果
        totalPage: 0,// 记录总条数
        pageSize: 5,// 每页显示条数
        page: 1,// 当前的页数
      }
    },
    created() {
      //获取列表详情
      //this.getHrefDown();
      this.getPageHrefInfo();
    },
    methods: {
      /*async getHrefDown() {
        this.hrefDownInfos = await getHrefDowns();
      },*/
      pagechange(page,pageSize) {
        this.page = page;
        this.pageSize = pageSize;
        this.getPageHrefInfo();
      },
      async getPageHrefInfo(){
        let PageHrefInfo = await getPageHrefInfos(this.page,this.pageSize);
        this.totalPage = PageHrefInfo.totalPage;
        this.hrefDownInfos = PageHrefInfo.hrefInfos;
      },
      deleteBatch() {//待定：需要改成批量传id
        this.hrefDownInfosCheck = this.hrefDownInfos.filter(item => item.isSelected);
        if (this.hrefDownInfosCheck.length === 0) {
          let instance = Toast('未选中任何数据');
          setTimeout(() => {
            instance.close();
          }, 500);
        }
        this.hrefDownInfosCheck.forEach(
          async item => {
            try {
              //发送两次请求，第一次是OPTIONS
              this.deleteFlag = JSON.parse(await deleteHrefDown(item.id)).flag;
              if (this.deleteFlag) {//如果放在forEach外部，需要同步方式
                //修改页面数据
                this.hrefDownInfos = this.hrefDownInfos.filter(item => !item.isSelected);
                let instance = Toast({
                  message: '删除成功',
                  iconClass: 'icon icon-success'
                });
                setTimeout(() => {
                  instance.close();
                }, 1000);
              }
            } catch (e) {
              this.deleteFlag = false;
            }
          }
        );
      }
    },
    computed: {
      checkAll: {
        set(val) {
          this.hrefDownInfos.map(item => item.isSelected = val)
        },
        get() {
          return this.hrefDownInfos.every(item => item.isSelected);
        }
      }
    },
    components: {
      'index-header': IndexHeader,
      'pagination': Pagination
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
    tr td {
      text-align: center;
      margin: 0 auto;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
