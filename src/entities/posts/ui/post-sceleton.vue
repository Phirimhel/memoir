<template>
 <div class="post-load-sceleton">
    <el-skeleton 
        v-for="item in items"
        :key="item"
        animated
        style="--el-skeleton-circle-size: 40px"
        :loading="loading"
    >
        <template #template>
            <el-card>
          <template #header>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <el-skeleton-item animated variant="text" style="width: 70%" />
              <el-skeleton-item animated variant="circle" />
            </div>
          </template>
  
          <div style="display: flex; flex-direction: column; gap: 10px">
            <el-skeleton-item animated variant="text" style="width: 100%" />
            <el-skeleton-item animated variant="text" style="width: 90%" />
            <el-skeleton-item animated variant="text" style="width: 60%" />
            <el-skeleton-item animated variant="text" style="width: 8em; margin-left: auto; height: 25px;" />
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'post-load-sceleton',
    props: {
      loading: {
        type: Boolean,
        required: true,
      },
      items: {
        type: Number,
        required: true,
      },
    },
  }
  </script>
  <style scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .post-body {
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 10px;
  }
  .post-body-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .post-load-sceleton {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
 
  </style>
  