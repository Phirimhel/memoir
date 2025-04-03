<template>
  <el-dialog width="900">
    <template #header>
      <div class="dialog-header">
        <el-icon><Promotion /></el-icon> {{ title }}
      </div>
    </template>
    <slot></slot>
  </el-dialog>
</template>

<script lang="ts">
export default {
  name: 'my-dialog',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.dialog-header {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
}
</style>
