<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span> {{ post.id }} ✪ {{ post.title }}</span>

        <div>
          <my-drop-down-button @emitDeletePost="emitDeletePost(post)" />
        </div>
      </div>
    </template>

    <div class="post-body">
      {{ post.body }}
    </div>
    <div class="post-body-button">
      <my-button :type="''" @click="$router.push(routes.postDetail(post.id))">
        Go to post detail
      </my-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from '@/entities/posts/types'
import { routes } from '@/shared/router/routes'

export default {
  name: 'post-item',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      routes,
    }
  },
  emits: ['editPost', 'emitDeletePost'],
  methods: {
    emitDeletePost(post: Post) {
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
</style>
