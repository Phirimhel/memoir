<template>
  <el-dialog width="900" :open-auto-focus="false">
    <template #header>
      <div class="dialog-header">
        <el-icon><Promotion /></el-icon> {{ title }}
      </div>
    </template>
    <slot></slot>
  </el-dialog>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/imputsMexins'

export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
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
