<template>
  <el-container>
    <el-header class="app-header">
      <!-- 左侧 Logo 区 -->
      <div class="left">
        <img src="https://vuejs.org/logo.svg" class="logo" />
        <span class="title">Vue.js</span>
      </div>

      <!-- 中间导航菜单 -->
      <el-menu mode="horizontal" :default-active="activeIndex" class="nav-menu">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">壮锦介绍</el-menu-item>
        <el-menu-item index="3">壮锦问答</el-menu-item>
        <el-menu-item index="4">小游戏</el-menu-item>
        <el-menu-item index="7">关于我们</el-menu-item>
      </el-menu>

      <!-- 右侧图标 暂时未使用 -->
      <div class="right">
        <el-button text icon="el-icon-translate"> </el-button>
        <el-button text icon="el-icon-moon"> </el-button>
        <el-button text icon="el-icon-github"> </el-button>
        <el-button text icon="el-icon-close"> </el-button>
      </div>
    </el-header>
    <el-main class="app-main">

    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  background-color: #121212;
  color: white;
  padding: 0 20px;
  height: 60px;
  justify-content: space-between;
}

.logo {
  width: 28px;
  margin-right: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #42b983;
}

.left {
  display: flex;
  align-items: center;
}

.nav-menu {
  margin-left: 5vh;
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  /* 移除底部边框 */
}

.nav-menu :deep(.el-menu-item),
.nav-menu :deep(.el-sub-menu__title) {
  color: white;
}

.right {
  display: flex;
  gap: 8px;
}

.app-main {
  background-color: #000000;
  min-height: calc(100vh - 60px);
}
</style>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>
