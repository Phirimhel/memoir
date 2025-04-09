import { computed, ComputedRef, Ref } from 'vue';
import type { Post } from '@/components/post-components/components/models';

export function useFilteredPosts(posts: Ref<Post[]>, query: Ref<string>): ComputedRef<Post[]> {
    console.log('useFilteredPosts')
  return computed(() => {
    return posts.value.filter(post =>
      post.title.toLowerCase().includes(query.value.toLowerCase())
    );
  });
}
