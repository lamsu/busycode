<template>
  <el-row class="tac">
    <el-col :span="24">
      <h3>更多</h3>
      <el-menu
        default-active=" "
        router
        background-color="#fff"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <!--<el-menu-item index="/code/bar">
          <i class="el-icon-notebook-2"></i>
          <span slot="title">条形码</span>
        </el-menu-item>-->
        <el-submenu index="/code/jba">
          <template slot="title">
            <i class="el-icon-notebook-2"></i>
            <span>条形码</span>
          </template>
          <el-menu-item index="/code/jba">单个</el-menu-item>
          <el-menu-item index="/code/bar">批量</el-menu-item>
        </el-submenu>


        <el-submenu index="/code/text">
          <template slot="title">
            <i class="el-icon-camera"></i>
            <span>二维码</span>
          </template>
          <el-menu-item index="/code/text">文本二维码</el-menu-item>
          <el-menu-item index="/code/link">WIFI二维码</el-menu-item>
          <el-menu-item index="/code/chat">通讯二维码</el-menu-item>
          <el-menu-item index="/code/mail">批量二维码</el-menu-item>
          <!--<el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>-->
          <!--<el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>-->
        </el-submenu>
        
        <!--<el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>-->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.activeIndex)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style  scoped>
.widget {
  list-style: none;
  padding: 0;
}
.widget li {
  padding: 8px 0;
}
</style>
