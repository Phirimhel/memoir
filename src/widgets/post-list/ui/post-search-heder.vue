<template>
    <!-- content header -->
    <div class="header-container">
        <!-- create post dialog -->
        <my-button @click="dialogFormVisible = true">Create Post</my-button>
        <my-dialog v-model="dialogFormVisible" title="Create post">
        <create-post-form :formTitle="'Create post'" @emitCreatePost="createPost" />
    </my-dialog>
        <!-- sort/search inputs -->
        <my-input v-model="searchQuery" placeholder="Search" />
        <my-select v-model="sortKey" :options="postSortOptions" placeholder="Sort by" />
    </div>
    </template>

    <script setup lang="ts">
    // vue
    import { ref } from 'vue'

    // entities
    import { Post, postSortOptions } from '@/entities/posts/types'

    // features
    import { CreatePostForm } from '@/features/post'

    const dialogFormVisible = ref(false)
    const searchQuery = defineModel<string>('searchQuery')
    const sortKey = defineModel<string>('sortKey')
    const emit = defineEmits(['emitCreatePost'])


    const createPost = (post: Post) => {
        emit('emitCreatePost', post)
    }
    </script>

    <style scoped>
    .header-container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
    }
  
    .el-select {
  max-width: 150px;
}

    </style>