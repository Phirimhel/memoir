import { Post } from '@/entities/posts/types'
import { getPosts } from '@/entities/posts/apis/getPosts.service'
import { Ref } from 'vue'

export async function loadMorePosts(
  page: number,
  limit: number,
  posts: Ref<Post[]>,
  isPostsLoading: Ref<boolean>,
) {
  try {
    isPostsLoading.value = true
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000))
    const response = await getPosts(page, limit)
    posts.value = [...posts.value, ...response.data]
  } catch (error) {
    console.error('[**Error fetching more posts**]:', error)
  } finally {
    console.log('finally loadMorePosts')
    isPostsLoading.value = false
  }
}
