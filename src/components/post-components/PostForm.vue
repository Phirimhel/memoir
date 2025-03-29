<template>
  <el-card>
    <form style="display: flex; flex-direction: column; gap: 10px">
      <h4>{{ formTitle }}</h4>
      <el-input v-model="post.title" placeholder="Title" />
      <el-input v-model="post.body" placeholder="Content" type="textarea" rows="4" />
      <el-button class="create-button" type="primary" @click="createPost(post)">Create</el-button>
    </form>
  </el-card>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from '@/components/post-components/models'
export default {
  name: 'PostForm',
  data() {
    return {
      post: {} as Post,
    }
  },
  props: {
    formTitle: {
      type: String as PropType<string>,
      required: true,
    },
  },
  methods: {
    clearForm(): void {
      this.post = {} as Post
    },

    createPost(post: Post): void {
      const newPost = {
        id: Math.random(),
        title: this.post.title,
        body: this.post.body,
        userId: 1,
      }
      this.$emit('emitCreatePost', newPost)
      this.clearForm()
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
