import { computed, ComputedRef, Ref } from 'vue';
import type { Post } from '@/entities/posts/types';

export function useFilteredPosts(posts: Ref<Post[]>, query: Ref<string>): ComputedRef<Post[]> {
  return computed(() => {
    return posts.value.filter(post =>
      post.title.toLowerCase().includes(query.value.toLowerCase())
    );
  });
}
