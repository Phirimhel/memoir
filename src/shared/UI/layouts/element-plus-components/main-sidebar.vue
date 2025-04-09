<template>
  <el-menu :default-active="activeIndex" class="el-menu" :collapse="isCollapse">
    <el-card shadow="always">Always</el-card>
    <el-menu-item :index="routes.posts" @click="$router.push(routes.posts)">
      <el-icon><UserFilled /></el-icon>
      <template #title>Posts</template>
    </el-menu-item>
    <el-menu-item :index="routes.postsStore" @click="$router.push(routes.postsStore)">
      <el-icon><UserFilled /></el-icon>
      <template #title>Posts Store</template>
    </el-menu-item>
    <el-menu-item
      :index="routes.postsStoreComposition"
      @click="$router.push(routes.postsStoreComposition)"
    >
      <el-icon><UserFilled /></el-icon>
      <template #title>Posts Store Composition</template>
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

<script lang="ts" setup>
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { routes } from '@/shared/router/routes'

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
