<template>
  <div class="post-list">
    <el-card v-for="post in posts" :key="post.id">
      <template #header>
        <div class="card-header">
          <span>{{ post.title }}</span>
        </div>
      </template>
      <div>{{ post.content }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
interface Post {
  title: string
  content: string
  id: number
}

export default {
  name: 'PostList',
  data() {
    return {}
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
