<template>
  <el-menu default-active="2" class="el-menu" :collapse="isCollapse">
    <el-card shadow="always">Always</el-card>
    <el-menu-item index="1" class="centered-menu-item">
      <el-icon><UserFilled /></el-icon>
      <template #title>Navigator One</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const isCollapse = ref(false)

const updateCollapse = () => {
  isCollapse.value = window.innerWidth <= 1024
}

onMounted(() => {
  window.addEventListener('resize', updateCollapse)
  updateCollapse()
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
</style>
