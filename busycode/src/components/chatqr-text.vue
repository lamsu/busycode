<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off" maxlength="5" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="cellphone">
          <el-input v-model.number="ruleForm.cellphone" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phonecall">
          <el-input v-model="ruleForm.phonecall" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="微信" prop="wechat">
          <el-input v-model="ruleForm.wechat" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input v-model.number="ruleForm.qq" size="mini"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="公司" prop="company">
          <el-input v-model="ruleForm.company" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="职位" prop="protitle">
          <el-input v-model="ruleForm.protitle" autocomplete="off" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="adrr">
          <el-input v-model="ruleForm.adrr" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="emaill">
          <el-input v-model="ruleForm.emaill" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="网址" prop="url">
          <el-input v-model="ruleForm.url" size="mini"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.el-form-item {
  margin: 0 auto 12px;
}
</style>

<script>
export default {
  data() {
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("姓名不能为空"));
      }
    };
    let cellPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else if (!Number.isInteger(value)) {
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入数字值"));
          } else {
            callback();
          }
        }, 1000);
      }
    };
    let phoneCall = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else {
        callback();
      }
    };
    let weChat = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入微信号"));
      } else {
        callback();
      }
    };
    let theQQ = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入QQ号"));
      } else {
        callback();
      }
    };
    let comPany = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入公司名字"));
      } else {
        callback();
      }
    };
    let proTitle = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入职位名称"));
      } else {
        callback();
      }
    };
    let eMail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱地址"));
      } else {
        callback();
      }
    };
    let thrUrl = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入网址"));
      } else {
        callback();
      }
    };
    let aDrr = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入地址"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        cellphone: "",
        phonecall: "", 
        wechat: "",
        qq: "",
        company: "",
        protitle: "",
        emaill: "",
        url: "",
        adrr: ""
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        cellphone: [{ validator: cellPhone, trigger: "blur" }],
        phonecall: [{ validator: phoneCall, trigger: "blur" }],
        wechat: [{ validator: weChat, trigger: "blur" }],
        qq: [{ validator: theQQ, trigger: "blur" }],
        company: [{ validator: comPany, trigger: "blur" }],
        protitle: [{ validator: proTitle, trigger: "blur" }],
        emaill: [{ validator: eMail, trigger: "blur" }],
        url: [{ validator: thrUrl, trigger: "blur" }],
        adrr: [{ validator: aDrr, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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