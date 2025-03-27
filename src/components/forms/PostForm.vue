<template>
  <el-card>
    <form style="display: flex; flex-direction: column; gap: 10px">
      <h4>{{ foemTitle }}</h4>
      <el-input v-model="postTitle" placeholder="Title" />
      <el-input v-model="postContent" placeholder="Content" type="textarea" rows="4" />
      <el-button class="create-button" type="primary" @click="">Create</el-button>
    </form>
  </el-card>
</template>

<script lang="ts">
import type { PropType } from 'vue'

export default {
  name: 'PostForm',
  data() {
    return {
      postTitle: '',
      postContent: '',
    }
  },
  props: {
    foemTitle: {
      type: String as PropType<string>,
      required: true,
    },
  },
}
</script>

<style scoped>
.create-button {
  margin-left: auto;
}
.el-card {
  margin-bottom: 20px;
}
</style>
