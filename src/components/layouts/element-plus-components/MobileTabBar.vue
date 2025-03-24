<template>
  <el-card shadow="always">
    <el-tabs
      v-model="activeName"
      :tab-position="'bottom'"
      class="demo-tabs"
      @tab-click="handleClick"
      stretch="true"
      type=""
    >
      <el-tab-pane name="first">
        <template #label>
          <el-icon><UserFilled /></el-icon>
        </template>
      </el-tab-pane>
      <el-tab-pane name="second">
        <template #label>
          <el-icon><Menu /></el-icon>
        </template>
      </el-tab-pane>
      <el-tab-pane name="third">
        <template #label>
          <el-icon><document /></el-icon>
        </template>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <template #label>
          <el-icon><setting /></el-icon>
        </template>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { Setting, UserFilled, Lock, List } from '@element-plus/icons-vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.el-card {
  height: 100vh;
}
.el-tabs__content {
  display: none;
}
:deep(.el-tabs__nav-wrap::after) {
  display: none !important;
}
</style>
