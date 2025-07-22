<template>
  <el-container>
    <el-header class="app-header">
      <!-- 左侧 Logo 区 -->
      <div class="left">
        <img :src="logo" class="logo" />
        <span class="title">壮锦博物馆</span>
      </div>

      <!-- 中间导航菜单 -->
      <el-menu mode="horizontal" :default-active="activeIndex" class="nav-menu">
        <el-menu-item index="1" @click="goPage('/home')">首页</el-menu-item>
        <el-menu-item index="2" @click="goPage('/intro')">壮锦介绍</el-menu-item>
        <el-menu-item index="3" @click="goPage('/qa')">壮锦问答</el-menu-item>
        <el-menu-item index="4" @click="goPage('/game')">小游戏</el-menu-item>
        <el-menu-item index="7" @click="goPage('/about')">关于我们</el-menu-item>
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
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo.png'

const router = useRouter()
const activeIndex = ref('1')
const goPage = (path) => {
  router.push(path)
}


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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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
  background-color: #232323;
  min-height: calc(100vh - 60px);
  padding-top: 60px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}
</style>
<style>
html,
body {
  margin: 0;
  padding: 0;
  background-color: #232323;
  /* 与 .app-main 保持一致，避免空白 */
  height: 100%;
  overflow-x: hidden;

}
</style>
