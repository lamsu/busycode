<template>
  <div v-loading="loading">
    <el-input
      v-model="input"
      placeholder="请输入文本，使用英文逗号或者换行分隔"
      type="textarea"
      :rows="5"
      style="width:60%;"
    ></el-input>
    <div style="display:inline-block;margin-left:20px;">
      <el-button @click="add2(input)" style="margin:10px">生成</el-button>
      <el-button @click="clear" style="margin:10px">重置</el-button>
    </div>
    <div v-for="(item, i) in items">
      <p>{{i+1}}、</p>
      <svg :id="'abc'+i" class="svgcode" />
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  data() {
    return {
      input: "",
      value1: true,
      items: [],
      str: [],
      loading: false
    };
  },

  methods: {
    clear() {
      this.items = [];
      this.input = "";
    },
    add2: function(input) {
      if (input) {
        this.loading = true;
        this.items = [];
        this.str = input.split(/,\r|,\n|;\r|;\n|;|\r|\n|,/);
        for (var i = 0; i < this.str.length; i++) {
          if (this.str[i]) {
            this.items.push(this.str[i]);
          }
        }
        setTimeout(() => {
          this.add3();
        }, 100);
      } else {
        this.$message.warning("对不起，请先输入内容！");
      }
    },
    add3: function() {
      let that = this;
      let opts = {
        errorCorrectionLevel: "M",
        //maskPattern: 3,
        margin: 4,
        scale: 4,
        //width:148,
        colorDark: "#000000",
        colorLight: "#ffffff"
        //src: "../../public/favicon1.ico"
      };
      for (let i = 0; i < that.items.length; i++) {
        QRCode.toString(that.items[i], opts, function(error, string) {
          if (error) {
            console.error(error);
          } else {
            document.getElementById("abc" + i).innerHTML = string;
          }
        });
      }
      that.$message({
        message: "恭喜你，二维码生成成功！",
        type: "success",
        duration: 1500
      });
      that.loading = false;
    }
  }
};
</script>

<style  scoped>
.svgcode {
  margin: 0 auto;
  display: block;
}
</style>
