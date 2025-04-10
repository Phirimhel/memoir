<template>
  <div v-loading="loading">
    <div class="header-container">
      <my-button @click="openFormDialog">Create Post</my-button>
      <my-input v-model="searchQuery" placeholder="Search" />
      <my-select :options="options" v-model="selectedOption" placeholder="Sort by" />
    </div>

    <div class="post-total-container">
      <el-tag type="warning" style="width: 105px">Total posts: {{ totalPosts }}</el-tag>
    </div>

    <my-dialog v-model="dialogFormVisible" title="Create post">
      <post-form
        :formTitle="'Create post'"
        @emitCreatePost="createPost"
        :formLoading="formLoading"
      />
    </my-dialog>

    <post-list
      :posts="searchedSortedPosts"
      @editPost="editPost"
      @emitDeletePost="console.log('emit delete post 3')"
      :loading="loading"
    />
    <!-- <el-pagination
    background
    layout="prev, pager, next"
    :total="25"
    :page-size="limit"
    @change="changePage"
    /> -->
  </div>
  <div v-if="!loading" v-intersection="loadMorePosts" class="observer"></div>
</template>

<script lang="ts">
import PostForm from '@/features/post/create-post/ui/create-post-form.vue'
import PostList from '@/widgets/post-list/ui/post-list.vue'
import type { Post } from '@/entities/posts/types'
import { getPosts } from '@/entities/posts/apis/getPosts.service'

type AllowedSelectionKeys = Pick<Post, 'title' | 'body'>

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
      options: [
        { value: 'title', label: 'name' },
        { value: 'body', label: 'description' },
      ],
      selectedOption: 'sort by',
      searchQuery: '',
      page: 1,
      limit: 6,
      totalPosts: 0,
      totalPages: 0,
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
      const posts = this.sortedPosts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
      this.totalPosts = posts.length
      return posts
    },
  },

  watch: {},

  methods: {
    editPost(post: Post) {},
    deletePost(post: Post) {
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

    // changePage(page: number) {
    //   this.page = page
    //   this.fetchPosts()
    // },

    async fetchPosts() {
      try {
        this.loading = true
        await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        const response = await getPosts(this.page, this.limit)
        this.posts = response.data
        this.totalPosts = Number(response.headers['x-total-count']) || 0
        this.totalPages = this.totalPosts / this.limit || 0
      } catch (error) {
        console.error('[**Error fetching posts**]:', error)
      } finally {
        this.loading = false
      }
    },

    async loadMorePosts() {
      try {
        const response = await getPosts(++this.page, this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (error) {
        console.error('[**Error fetching posts**]:', error)
      } finally {
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

.el-pagination {
  margin-top: 20px;
}

.post-total-container {
  margin-bottom: 20px;
}

.observer {
  height: 120px;
}
</style>
