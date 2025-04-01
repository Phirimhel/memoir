<template>
  <div v-loading="loading">
    <el-button @click="openFormDialog">Open form dialog</el-button>

    <post-form-dialog v-model="dialogFormVisible">
      <post-form :formTitle="'Create post'" @emitCreatePost="createPost" v-loading="formLoading" />
    </post-form-dialog>

    <post-list :posts="[]" @editPost="editPost" @emitDeletePost="deletePost" />
  </div>
</template>

<script lang="ts">
import PostForm from './components/post-form.vue'
import PostList from './components/post-list.vue'
import type { Post } from './components/models'
import { getPosts } from './components/post.service'

export default {
  name: 'RootPostPage',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [] as Post[],
      dialogFormVisible: false,
      loading: false,
      formLoading: false,
    }
  },

  async mounted() {
    await this.fetchPosts()
  },

  methods: {
    editPost(post: Post) {},
    deletePost(post: Post) {
      console.log('delete post 1')
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    async createPost(post: Post) {
      this.formLoading = true
      await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
      this.posts.unshift(post)
      this.dialogFormVisible = false
      this.formLoading = false
    },

    openFormDialog() {
      this.dialogFormVisible = true
    },

    async fetchPosts() {
      try {
        this.loading = true
        await new Promise((resolve) => setTimeout(() => resolve(true), 5000))
        const response = await getPosts()
        this.posts = response.data
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
