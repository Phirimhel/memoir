import { computed, ComputedRef, Ref } from 'vue'
import { Post } from '@/entities/posts/types'
import { getCompareFunction } from '@/shared/helpers/common/useSortHelper'

export function useSortedPosts(posts: Ref<Post[]>, sortKey: Ref<keyof Post>): ComputedRef<Post[]> {
  return computed(() => {
    const items = posts.value
    if (items.length === 0) return []

    const sampleValue = items[0][sortKey.value]
    const compare = getCompareFunction(sampleValue)

    return [...items.sort((a, b) => compare(a[sortKey.value], b[sortKey.value]))]
  })
}
