<template>
  <div class="scollPadRight">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名" prop="FName">
            <el-input v-model="ruleForm.FName" autocomplete="off" maxlength="6" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="cellphone">
            <el-input v-model.number="ruleForm.cellphone" autocomplete="off" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="ruleForm.phonecall" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="ruleForm.emaill" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model.number="ruleForm.note" size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="公司">
            <el-input v-model="ruleForm.company" autocomplete="off" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="ruleForm.protitle" autocomplete="off" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="ruleForm.adrr" size="mini"></el-input>
          </el-form-item>
          
          <el-form-item label="网址">
            <el-input v-model="ruleForm.url" size="mini"></el-input>
          </el-form-item>

  <el-form-item>
        <el-button @click="submitForm('ruleForm')" size="mini">生成</el-button>
        <el-button @click="resetForm('ruleForm')" size="mini">重置</el-button>
      </el-form-item>

        </el-col>
      </el-row>
    </el-form>
    <canvas id="qrcode"></canvas>
  </div>
</template>

<style scoped>
.el-form-item {
  margin: 0 auto 12px;
}
</style>

<script>
import QRCode from "qrcode";
export default {
  data() {
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      } else {
        callback();
      }
    };
    let cellPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value)) {
        callback(new Error("手机号码有误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        FName: "",
        cellphone: "",
        phonecall: "",
        note: "",
        company: "",
        protitle: "",
        emaill: "",
        url: "",
        adrr: ""
      },
      rules: {
        FName: [{ validator: checkName, trigger: "blur" }],
        cellphone: [{ validator: cellPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const FN = "FN:" + this.ruleForm.FName + "\n";
          const TEL =
            "TEL;type=CELL;type=VOICE;type=pref:" + this.ruleForm.cellphone + "\n";
          const TEL0 = this.ruleForm.phonecall
            ? "TEL;WORK;VOICE:" + this.ruleForm.phonecall + "\n"
            : "";
          const ORG = this.ruleForm.company
            ? "ORG;CHARSET=UTF-8:" + this.ruleForm.company + "\n"
            : "";
          const TITLE = this.ruleForm.protitle
            ? "TITLE;CHARSET=UTF-8:" + this.ruleForm.protitle + "\n"
            : "";
          const ADR = this.ruleForm.adrr
            ? "ADR;CHARSET=UTF-8;TYPE=WORK:" + this.ruleForm.adrr + "\n"
            : "";
          const EMAIL = this.ruleForm.emaill
            ? "EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:" +
              this.ruleForm.emaill +
              "\n"
            : "";
          const URL = this.ruleForm.url
            ? "URL;type=WORK;CHARSET=UTF-8:" + this.ruleForm.url + "\n"
            : "";
          const MSN = this.ruleForm.note ? "NOTE;CHARSET=UTF-8:" + this.ruleForm.note + "\n": "";

          let info =
            "BEGIN:VCARD\nVERSION:3.0\n" +
            FN +
            TEL +
            TEL0 +
            ORG +
            TITLE +
            ADR +
            URL+
            EMAIL +
            MSN +
            "END:VCARD";
          let that=this;
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
          console.log(MSN);
          QRCode.toCanvas(
            document.getElementById("qrcode"),
            info,
            opts,
            function(err) {
              if (err) {
                throw err;
              } else {
                that.$message({
                  message: "恭喜你，二维码生成成功！",
                  type: "success"
                });
              }
            }
          );
        } else {
          this.$message({
            message: "对不起，内容没填写或有误！",
            type: "warning"
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>