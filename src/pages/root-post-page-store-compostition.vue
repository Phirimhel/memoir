<template>
  <!-- content header -->
  <div class="header-container">
    <!-- create post dialog -->
    <my-button @click="dialogFormVisible = true">Create Post</my-button>
    <my-dialog v-model="dialogFormVisible" title="Create post">
      <post-form :formTitle="'Create post'" @emitCreatePost="createPost" />
    </my-dialog>

    <!-- sort/search inputs -->
    <my-input v-model="searchQuery" placeholder="Search" />
    <my-select v-model="sortKey" :options="postSortOptions" placeholder="Sort by" />
  </div>

  <!-- info about posts -->
  <div class="post-total-container">
    <el-tag type="warning" style="width: 105px">Total posts: {{ totalPosts }}</el-tag>
    <el-tag type="success">Total loaded posts: {{ filteredPosts.length }}</el-tag>
    <el-tag type="success">Possible pages: {{ totalPages }}</el-tag>
  </div>

  <!-- post list -->
  <post-list :posts="filteredPosts" :loading="isPostsLoading" @emitDeletePost="deletePost" />

  <!-- loading more posts loader -->
  <div class="isPostsLoading" v-loading="isPostsLoading"></div>

  <!-- condition "searchQuery" is used to prevent loading more posts when there is a search query -->
  <div v-if="!isPostsLoading && !searchQuery" v-intersection="loadPosts" class="observer"></div>
</template>

<script lang="ts" setup>
// vue
import { ref } from 'vue'
// types / models
import { postSortOptions, Post } from '@/entities/posts/types/index'
// widgets
import PostList from '@/entities/posts/ui/post-list.vue'
// hooks
import {
  loadMorePosts,
  fetchPosts,
  useSortedPosts,
  useFilteredPosts,
} from '@/entities/posts/models/index'

const sortKey = ref<keyof Post>('id')
const searchQuery = ref<string>('')
const dialogFormVisible = ref<boolean>(false)
const page = ref<number>(1)
const limit = ref<number>(6)

const { totalPages, isPostsLoading, posts, totalPosts } = fetchPosts(page.value, limit.value)
const sortedPosts = useSortedPosts(posts, sortKey)
const filteredPosts = useFilteredPosts(sortedPosts, searchQuery)

const createPost = (post: Post) => {
  sortKey.value = 'id'
  posts.value.unshift(post)
  dialogFormVisible.value = false
}

const deletePost = (post: Post) => {
  posts.value = [...posts.value.filter((p) => p.id !== post.id)]
}

const loadPosts = () => {
  loadMorePosts(++page.value, limit.value, posts, isPostsLoading)
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
  display: flex;
  justify-content: start;
  gap: 10px;
}
.observer {
  height: 10px;
  padding: 10px;
}
.isPostsLoading {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
</style>
