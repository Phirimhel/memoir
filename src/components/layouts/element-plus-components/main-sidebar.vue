<template>
  <el-menu :default-active="activeIndex" class="el-menu" :collapse="isCollapse">
    <el-card shadow="always">Always</el-card>
    <el-menu-item :index="routes.posts" @click="$router.push(routes.posts)">
      <el-icon><UserFilled /></el-icon>
      <template #title>Posts</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item :index="routes.settings" @click="$router.push(routes.settings)">
      <el-icon><setting /></el-icon>
      <template #title>Settings</template>
    </el-menu-item>
  </el-menu>
</template>

const routes = [ { path: '/posts', component: RootPostPage, }, { path: '/settings', component:
RootSettingsPage, }, ]

<script lang="ts" setup>
const routes = {
  posts: '/main/content/posts',
  settings: '/main/content/settings',
}

import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'

const isCollapse = ref(false)
const route = useRoute()
const activeIndex = ref(route.path)

const updateCollapse = () => {
  isCollapse.value = window.innerWidth <= 1024
}

onMounted(() => {
  window.addEventListener('resize', updateCollapse)
  updateCollapse()
  activeIndex.value = route.path
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCollapse)
})
</script>

<style scoped>
.el-menu:not(.el-menu--collapse) {
  width: 250px;
  height: 100vh;
}

.el-menu.el-menu--collapse {
  width: 64px;
  height: 100vh;
}

.el-card {
  margin: 10px;
}
</style>
