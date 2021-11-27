<template>
  <div id="app">
    <heade msg="我忙的很" />
    <router-view />
    <!--body end-->
    <!--boder -->
    <el-row>
      <el-col :span="24">
        <footer id="footer">
          © 2019
          <a href=":javascript">打码之家</a>.由
          <a href=":javascript">call666</a>提供.
        </footer>
      </el-col>
    </el-row>
    <!--boder end -->
  </div>
</template>

<script>
import heade from "./views/heade";

export default {
  name: "app",
  components: {
    heade,
  },
  
  
};
</script>

<style>
</style>
