<template>
  <el-card class="header">
    <slot>
      <el-icon><Promotion /></el-icon>
      To obtain the reference with Composition API
    </slot>
  </el-card>
</template>

<script setup lang="ts"></script>
<style scoped>
.header {
  text-align: center;
  margin: 10px;
  text-align: left;
}
</style>
