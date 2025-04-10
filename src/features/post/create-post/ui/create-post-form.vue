<template>
  <div v-loading="formLoading">
    <el-form :title="formTitle">
      <my-input v-model="post.title" placeholder="Title" v-focus />
      <my-textarea v-model="post.body" placeholder="Body" />
      <my-button @click="createPost">Create post</my-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from '@/entities/posts/types'

export default {
  name: 'create-post-form',
  data() {
    return {
      post: {} as Post,
      focused: true,
    }
  },
  props: {
    formTitle: {
      type: String as PropType<string>,
      required: true,
    },
    formLoading: {
      type: Boolean as PropType<boolean>,
      required: false,
    },
  },

  methods: {
    clearForm(): void {
      this.post = {} as Post
    },

    createPost(): void {
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
