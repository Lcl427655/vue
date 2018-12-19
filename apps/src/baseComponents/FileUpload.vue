<template>
  <div id="Count">
    <div class="Count_Top">
      <label></label>
      <br>
    </div>
    <div>
      <input type="file" value ref="myfile" id="file" style="display: none" @change="onUpload">
      <mt-button type="default" @click.native="openFileUpload">上传</mt-button>
      <mt-progress v-model="progress" :bar-height="5">
        <div slot="end">{{progressShow}}</div>
      </mt-progress>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast, Progress } from "mint-ui";
//Vue.component(Progress.name, Progress);
export default {
  name: "test",
  data() {
    return {
      progress: 0,
      progressShow: ""
    };
  },
  methods: {
    openFileUpload() {
      this.$refs.myfile.click();
    },
    resetFileInput() {
      this.$refs.myfile.value = "";
      this.refreshProgress(0);
    },
    refreshProgress(complete) {
      this.progress = complete;
      this.progressShow = complete == 0 ? "" : complete + "%";
    },
    onUpload(e) {
      var formData = new FormData();
      formData.append("file", e.target.files[0]);
      var config = {
        onUploadProgress: progressEvent => {
          var complete =
            ((progressEvent.loaded / progressEvent.total) * 100) | 0;
          this.refreshProgress(complete);
        }
      };
      this.$ajax
        .post("http://localhost:8081/media/upload", formData, config)
        .then(
          response => {
            Toast(response.data.note);
            this.resetFileInput();
          },
          response => {
            console.info(response);
            Toast("上传失败[" + response + "]");
            this.resetFileInput();
          }
        );
    }
  },
  created() {}
};
</script>
<style scoped lang="less">
#Count .Count_Top {
  padding: 16px;
  color: #26a2ff;
}
#Count .Count_Top label {
  font-size: 12px;
}
#Count .Count_Top {
  font-size: 30px;
}
#Count {
  margin-top: 0;
  position: relative;
  height: auto;
  background-color: #eee;
}
</style>
