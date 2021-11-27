<template>
  <div v-loading="loading">
    <el-row>
      <el-col :span="8">
        <div class="gridpad">
          <el-input v-model="input1" type="number" max="200" min="40" placeholder="60"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="gridpad">
          <el-cascader
            v-model="value"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          ></el-cascader>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="gridpad">
          <el-switch v-model="value1" active-text="显示编码" inactive-text="不显示"></el-switch>
        </div>
      </el-col>
    </el-row>
    <el-input v-model="input" placeholder="请输入文本..." style="width:60%;"></el-input>
    <div style="display:inline-block;margin-left:20px;">
      <el-button @click="add2(input)" style="margin:10px">生成</el-button>
    </div>
    <div>
      <svg id="barcode" class="svgcode" />
    </div>
  </div>
</template>

<script>
import "../assets/js/JsBarcode.all.min.js";
export default {
  data() {
    return {
      input: "",
      input1: "100",
      options: [
        {
          value: "CODE128",
          label: "CODE128",
          children: [
            {
              value: "CODE128",
              label: "CODE128"
            },
            {
              value: "CODE128A",
              label: "CODE128-A"
            },
            {
              value: "CODE128B",
              label: "CODE128-B"
            },
            {
              value: "CODE128C",
              label: "CODE128-C"
            }
          ]
        },
        {
          value: "CODE39",
          label: "CODE39"
        },
        {
          value: "EAN",
          label: "EAN",
          children: [
            {
              value: "EAN13",
              label: "EAN-13"
            },
            {
              value: "EAN8",
              label: "EAN-8"
            },
            {
              value: "EAN5",
              label: "EAN-5"
            },
            {
              value: "EAN2",
              label: "EAN-2"
            }
          ]
        },
        {
          value: "UPC",
          label: "UPC",
          children: [
            {
              value: "UPC",
              label: "UPC-A"
            },
            {
              value: "UPCE",
              label: "UPC-E"
            }
          ]
        },
        {
          value: "ITF",
          label: "ITF",
          children: [
            {
              value: "ITF",
              label: "ITF"
            },
            {
              value: "ITF14",
              label: "ITF-14"
            }
          ]
        },
        {
          value: "MSI",
          label: "MSI",
          children: [
            {
              value: "MSI10",
              label: "MSI10"
            },
            {
              value: "MSI11",
              label: "MSI11"
            },
            {
              value: "MSI1010",
              label: "MSI1010"
            },
            {
              value: "MSI1110",
              label: "MSI1110"
            }
          ]
        },
        {
          value: "pharmacode",
          label: "Pharmacode"
        },
        {
          value: "codabar",
          label: "Codabar"
        }
      ],
      value: ["CODE128", "CODE128"],
      value1: true,
      loading: false,
    };
  },

  methods: {
    handleChange(value) {
      //console.log(value);
    },
    add2: function(input) {
      if (input) {
        this.loading = true;
        let that = this;
        JsBarcode("#barcode", input, {
          format: this.value.slice(-1),
          lineColor: "#000",
          width: 2,
          height: this.input1,
          displayValue: this.value1,
          valid: function(valid) {
            if (valid) {
              that.loading = false;
              that.$message({
                //showClose: true,
                message: "恭喜您，条码生成成功！",
                type: "success",
                duration: 1500
              });
            } else {
              that.$message({
                message: "您输入的" + input + "格式有误！",
                type: "warning",
                duration: 1500
              });
              that.loading = false;
            }
          }
        });
      } else {
        this.$message.warning("对不起，请先输入内容！");
      }
    },
//message：提示文本，type:'warning' 'error' 'success' 空
    
  }
};
</script>

<style  scoped>
.svgcode {
  margin: 0 auto;
  display: block;
}
.el-switch {
  margin-top: 10px;
}
.el-row {
  margin-bottom: 15px;
}
.gridpad {
  padding-right: 10px;
}
#barcode{
  margin-top: 60px;
}
</style>
