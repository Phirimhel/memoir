<template>

<div class="header-container">
      <!-- <my-button @click="openFormDialog">Create Post</my-button> -->
      <!-- <my-input v-model="searchQuery" placeholder="Search" />  -->
   
    </div>

    <post-list :posts="filteredPosts" :loading="isPostsLoading" />
<!-- 
    <div class="post-total-container">
      <el-tag type="warning" style="width: 105px">Total posts: {{ totalPosts }}</el-tag>
      <el-tag type="success">Total loaded posts: {{ totalLoadedPosts }}</el-tag>
      <el-tag type="success">Possible pages: {{ totalPages }}</el-tag>
    </div> -->

    <!-- <my-dialog v-model="dialogFormVisible" title="Create post">
      {{ formLoading }}
      <post-form :formTitle="'Create post'" @emitCreatePost="createPost" :formLoading="formLoading"/>
    </my-dialog> -->



  <!-- <div v-if="!isPostsLoading" v-intersection="" class="observer"></div> -->

</template>



<script lang="ts" setup>
import PostList from '@/components/post-components/components/post-list.vue';


import { ref } from 'vue';
import type { Post } from '@/components/post-components/components/models';
import { fetchPosts } from '@/hooks/usePosts';
import { useSortedPosts } from '@/helpers/posts/useSortedPost';
import { useFilteredPosts } from '@/helpers/posts/useSearchedSortedPosts';

const sortKey = ref<keyof Post>('id');
const searchQuery = ref<string>('');

const { totalPages, isPostsLoading, posts, totalLoadedPosts, totalPosts } = fetchPosts(1, 6);
const sortedPosts = useSortedPosts(posts, sortKey);
const filteredPosts = useFilteredPosts(sortedPosts, searchQuery);



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
  height: 120px;
}
</style>
