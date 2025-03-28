<template>
  <PostForm :formTitle="'Create post'" @emitCreatePost="createPost" />
  <PostList :posts="posts" @editPost="editPost" @deletePost="deletePost" />
</template>

<script lang="ts">
import PostForm from '@/components/post-components/PostForm.vue'
import PostList from '@/components/post-components/PostList.vue'
import type { Post } from '@/components/post-components/models'
import { getPosts } from '@/components/post-components/post.service'

export default {
  name: 'Content',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [] as Post[],
    }
  },
  async mounted() {
    this.posts = (await getPosts()).data
  },
  methods: {
    editPost(post: Post) {},
    deletePost(post: Post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },
    createPost(post: Post) {
      this.posts.unshift(post)
    },
  },
}
</script>

<style scoped></style>
