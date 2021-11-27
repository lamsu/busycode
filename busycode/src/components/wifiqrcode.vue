<template>
  <div>
    <el-form>
    <el-input placeholder="SSID" v-model="ssid" size="small" class="inppad"></el-input>

    <el-input placeholder="WIFI密码" v-model="pass" size="small" show-password class="inppad"></el-input>
    </el-form>

    <el-select v-model="value" size="small" placeholder="加密方式" class="slepad">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-switch
      v-model="switchval"
      active-text="WIFI已隐藏"
      inactive-text="非隐藏"
      active-color="#13ce66"
      inactive-color="#409EFF"
      class="switchpad"
    ></el-switch>
    <el-button @click="gettext(ssid,pass)" style="margin:10px" size="medium">生成</el-button>
    <canvas id="qrcode"></canvas>
  </div>
</template>

<style scoped>
.inppad {
  margin-top: 16px;
  width: 60%;
  display: block;
}
.switchpad {
  margin: 0 40px;
}
</style>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      ssid: "",
      pass: "",
      value: "WPA",
      switchval: false,
      options: [
        {
          value: "WPA",
          label: "WPA/WPA2"
        },
        {
          value: "WEP",
          label: "WEP"
        },
        {
          value: " ",
          label: "无"
        }
      ]
    };
  },
  methods: {
    gettext: function(ssid, pass) {
      let that = this;
      let text =
        "WIFI:T:" +
        this.value +
        ";S:" +
        ssid +
        ";P:" +
        pass +
        ";H:" +
        this.switchval +
        ";";
      let opts = {
        errorCorrectionLevel: "M",
        //maskPattern: 3,
        margin: 4,
        scale: 4,
        //width:148,
        colorDark: "#000000",
        colorLight: "#ffffff",
        src: "../../public/favicon1.ico" //?
      };
      if (ssid && pass) {
        QRCode.toCanvas(document.getElementById("qrcode"), text, opts, function(
          err
        ) {
          if (err) {
            throw err;
            return;
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