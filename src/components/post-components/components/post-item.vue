<template>
  <slot></slot>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>✪ {{ post.title }}</span>
        <div>
          <my-drop-down-button @emitDeletePost="emitDeletePost(post)" />
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
  name: 'post-item',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  emits: ['editPost', 'emitDeletePost'],
  methods: {
    emitDeletePost(post: Post) {
      console.log('emit delete post 3')
      this.$emit('emitDeletePost', post)
    },
  },
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
