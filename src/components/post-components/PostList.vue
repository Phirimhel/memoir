<template>
  <div class="post-list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from './models'
import PostItem from './PostItem.vue'
import TestButton from './UI/testButton.vue'
export default {
  name: 'PostList',
  components: {
    PostItem,
    TestButton,
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
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
