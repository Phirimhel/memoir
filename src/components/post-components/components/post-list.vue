<template>
  <div class="post-list" v-if="posts.length > 0">
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @emitDeletePost="deletePost(post)"
    />
  </div>
  <div v-else class="no-posts-container">
    <no-posts />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from './models'
import PostItem from './post-item.vue'
import NoPosts from './no-posts.vue'
export default {
  name: 'post-list',
  components: {
    PostItem,
    NoPosts,
  },
  data() {
    return {}
  },

  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
  methods: {
    deletePost(post: Post) {
      console.log('delete post 2')
      this.$emit('emitDeletePost', post)
    },
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
