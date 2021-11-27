<template>
  <el-backtop target=".el-scrollbar__wrap" :bottom="40" :right="40">
    <div class="backtop">
      <i class="el-icon-top"></i>
    </div>
  </el-backtop>
</template>

<style  scoped>
.backtop {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
.backtop i {
  font-weight: bold;
  font-size: 16px;
}
</style>