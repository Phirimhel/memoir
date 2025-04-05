<template>
  <el-skeleton animated style="--el-skeleton-circle-size: 40px" :loading="loading">
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
          <el-skeleton-item animated variant="text" style="width: 60%" />
        </div>
      </el-card>
    </template>
    <template #default>
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
          <my-button :type="''">Go to post detail</my-button>
        </div>
      </el-card>
    </template>
  </el-skeleton>
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
    loading: {
      type: Boolean,
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
