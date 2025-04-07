
import { computed, Ref } from 'vue';
import { Post } from '@/components/post-components/components/models';
import { getCompareFunction } from '@/helpers/common/useSortHelper';

export function useSortedPosts(posts: Ref<Post[]>, sortKey: Ref<keyof Post>) {
  return computed(() => {
    const items = posts.value;
    if (items.length === 0) return [];

    const sampleValue = items[0][sortKey.value]; 
    const compare = getCompareFunction(sampleValue);

    console.log(compare);

    return [...items].sort((a, b) => compare(a[sortKey.value], b[sortKey.value]));
  });
}
