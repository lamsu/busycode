<template>
  <div class="content">
    <el-row class="container">
        <el-col :span="18">
          <div class="incontain marright" :style="autoheight">
            <el-scrollbar style="height:100%;">
              <router-view>
              </router-view>
            </el-scrollbar>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="incontain" :style="autoheight">
            <el-scrollbar style="height:100%;"> 
              <sidebar/>
            </el-scrollbar>
          </div>
        </el-col>
      </el-row>
      <backtop />
  </div>
</template>

<script>
import sidebar from "../components/sidebar";
import backtop from "../components/backtop";


export default {
  name: "qrcontent",
  components: {
    sidebar,
    backtop
  },
  data() {
    return {
      autoheight: {
        height: ""
      }
    };
  },
  methods: {
    getHeight() {
      this.autoheight.height = window.innerHeight - 197 + "px";
    }
  },

  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },

  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  }
};
</script>
