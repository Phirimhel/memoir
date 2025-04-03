<template>
  <el-form :title="formTitle">
    <my-input v-model="post.title" placeholder="Title" />
    <my-textarea v-model="post.body" placeholder="Body" />
    <my-button @click="createPost">Create post</my-button>
  </el-form>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from './models'

export default {
  name: 'post-form',
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

  watch: {
    post: {
      handler(newVal: Post) {
        console.log(`post changed to: `, newVal)
      },
      deep: true,
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
.el-button {
  margin-left: auto;
}
.el-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
