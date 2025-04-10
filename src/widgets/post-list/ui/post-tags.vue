<template>
  <div class="tags-bar">
    <el-tag type="warning" style="width: 105px">Total posts: {{ totalPosts }}</el-tag>
    <el-tag type="success">Total loaded posts: {{ filteredPosts }}</el-tag>
    <el-tag type="success">Possible pages: {{ totalPages }}</el-tag>
  </div>

</template>

<script setup lang="ts">
defineProps<{
  totalPosts: number
  filteredPosts: number
  totalPages: number
}>()

</script>



<style scoped>
.tags-bar {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.tags-bar {
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: start;
  gap: 10px;
}

</style>