<template>
  <div class="getvaule">
    <el-input placeholder="请输入文本或网址..." v-model="input" style="width:80%;"></el-input>
    <el-button @click="gettext(input)" style="margin:10px">生成</el-button>
    <canvas id="qrcode"></canvas>
  </div>
</template>

<style scoped>
.getvaule {
  margin-top: 3px;
}
</style>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    gettext: function(text) {
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
      if (text) {
        QRCode.toCanvas(document.getElementById("qrcode"), text, opts, function(
          err
        ) {
          if (err) {
            throw err;
          } else {
            that.$message({
              message: "恭喜你，二维码生成成功！",
              type: "success"
            });
          }
        });

        QRCode.toString(text, opts, function(error, string) {
          if (error) console.error(error);
          //document.getElementById("qrcode").innerHTML = string;
        });
        QRCode.toDataURL(
          text,
          {
            errorCorrectionLevel: "H",
            type: "image/jpeg",
            rendererOpts: {
              quality: 0.3
            }
          },
          function(error, url) {
            if (error) console.error(error, url);
            //console.log(url);
          }
        );
      } else {
        this.$message({
          message: "对不起，请先输入内容！",
          type: "warning"
        });
      }
    }
  }
};
</script>