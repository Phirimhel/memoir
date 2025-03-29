<template>
  <slot></slot>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>✪ {{ post.title }}</span>
        <div>
          <PostDropDown
            @emitEditPost="console.log('emit edit post')"
            @emitDeletePost="console.log('emit delite post')"
          />
        </div>
      </div>
    </template>
    <div>{{ post.body }}</div>
  </el-card>
</template>

<script lang="ts">
import type { Post } from './models'
import type { PropType } from 'vue'

export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  emits: ['editPost', 'deletePost'],
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
