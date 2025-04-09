<template>
  <div class="post-list" v-if="posts.length > 0">
    <TransitionGroup name="list">
      <div v-for="post in posts" :key="post.id">
        <post-item :post="post" @emitDeletePost="deletePost(post)" :loading="loading" />
      </div>
    </TransitionGroup>
  </div>
  <div v-else class="no-posts-container">
    <post-load-sceleton :loading="loading" :items="6" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Post } from '@/entities/posts/types'
import PostItem from '@/entities/posts/ui/post-item.vue'
import NoPosts from '@/shared/UI/placeholders/no-content-container.vue'
import PostLoadSceleton from '@/entities/posts/ui/post-sceleton.vue'
export default {
  name: 'post-list',
  components: {
    PostItem,
    NoPosts,
    PostLoadSceleton,
  },
  data() {
    return {}
  },

  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    deletePost(post: Post) {
      console.log('delete post 2', post)
      this.$emit('emitDeletePost', post)
    },
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  gap: 20px;
}

.list-enter-active {
  transition: all 0.3s ease;
}
.list-leave-active {
  transition: all 0.2s ease;
  position: absolute;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-move {
  transition: transform 0.4s ease;
}
.post-load-sceleton {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
