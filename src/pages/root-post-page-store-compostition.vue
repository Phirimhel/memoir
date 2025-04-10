<template>
  <!-- search header -->
  <post-search-header v-model:searchQuery="searchQuery" v-model:sort-key="sortKey" @emitCreatePost="createPost" />
 
  <!-- info about posts -->
  <post-tags :totalPages :totalPosts :filteredPosts="filteredPosts.length"  />

  <!-- post list -->
  <post-list :posts="filteredPosts" :loading="isPostsLoading" @emitDeletePost="deletePost" />

  <!-- loading more posts loader -->
  <div v-loading="isPostsLoading" class="isPostsLoading"></div>

  <!-- condition "searchQuery" is used to prevent loading more posts when there is a search query -->
  <div v-if="!isPostsLoading && !searchQuery" v-intersection="loadPosts" class="observer"></div>
</template>

<script lang="ts" setup>
// vue
import { ref } from 'vue'

// widgets
import { postList, postTags, postSearchHeader } from '@/widgets/post-list/index'

// features
import {
  loadMorePosts,
  useSortedPosts,
  useFilteredPosts,
} from '@/features/post/index'


// entities
import { fetchPosts } from '@/entities/posts/index'

// types / models
import { Post } from '@/entities/posts/types/index'

const sortKey = ref<keyof Post>('id')
const searchQuery = ref<string>('')

const page = ref<number>(1)
const limit = ref<number>(6)

// fetch posts hook
const { totalPages, isPostsLoading, posts, totalPosts } = fetchPosts(page.value, limit.value)

// computed
const sortedPosts = useSortedPosts(posts, sortKey)
const filteredPosts = useFilteredPosts(sortedPosts, searchQuery)

// methods
const createPost = (post: Post) => {
  sortKey.value = 'id'
  posts.value.unshift(post)
}

const deletePost = (post: Post) => {
  posts.value = [...posts.value.filter((p) => p.id !== post.id)]
}

const loadPosts = () => {
  loadMorePosts(++page.value, limit.value, posts, isPostsLoading)
}
</script>

<style scoped>

.isPostsLoading {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}
</style>
