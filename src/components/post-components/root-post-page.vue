<template>
  <div v-loading="loading">
    <div class="header-container">
      <my-button @click="openFormDialog">Create Post</my-button>
      <my-input v-model="searchQuery" placeholder="Search" />
      <my-select
        :options="options"
        v-model="selectedOption"
        placeholder="Sort by"
        @change="sortPosts"
      />
    </div>

    <my-dialog v-model="dialogFormVisible" title="Create post">
      <post-form :formTitle="'Create post'" @emitCreatePost="createPost" v-loading="formLoading" />
    </my-dialog>

    <post-list :posts="searchedSortedPosts" @editPost="editPost" @emitDeletePost="deletePost" />
  </div>
</template>

<script lang="ts">
import PostForm from './components/post-form.vue'
import PostList from './components/post-list.vue'
import type { Post } from './components/models'
import { getPosts } from './components/post.service'
import header from '../layouts/element-plus-components/header.vue'

type AllowedSelectionKeys = Pick<Post, 'title' | 'body'>

export default {
  name: 'RootPostPage',
  components: {
    PostList,
    PostForm,
    header,
  },
  data() {
    return {
      posts: [] as Post[],
      dialogFormVisible: false,
      loading: false,
      formLoading: false,
      options: [
        { value: 'title', label: 'name' },
        { value: 'body', label: 'description' },
      ],
      selectedOption: 'sort by',
      searchQuery: '',
    }
  },

  async mounted() {
    await this.fetchPosts()
  },

  computed: {
    sortedPosts(): Post[] {
      const key = this.selectedOption as keyof AllowedSelectionKeys
      // without selectedOption return posts without sorting
      if (!['title', 'body'].includes(this.selectedOption)) {
        return this.posts
      }
      return [...this.posts].sort((postA, postB) => {
        return postA[key].localeCompare(postB[key])
      })
    },

    searchedSortedPosts(): Post[] {
      return this.sortedPosts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    },
  },

  watch: {},

  methods: {
    editPost(post: Post) {},
    deletePost(post: Post) {
      console.log('delete post 1')
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    async createPost(post: Post) {
      this.formLoading = true
      await new Promise((resolve) => setTimeout(() => resolve(true), 300))
      this.posts.unshift(post)
      this.dialogFormVisible = false
      this.formLoading = false
    },

    openFormDialog() {
      this.dialogFormVisible = true
    },

    sortPosts() {
      console.log('sort posts - ', this.selectedOption)
    },

    async fetchPosts() {
      try {
        this.loading = true
        await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        const response = await getPosts()
        this.posts = response.data
      } catch (error) {
        console.error('[**Error fetching posts**]:', error)
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

.header-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.el-select {
  max-width: 150px;
}

.el-input {
  height: 32px;
}
</style>
