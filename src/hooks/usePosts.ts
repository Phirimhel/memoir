import { Post } from "@/components/post-components/components/models"
import { getPosts } from "@/components/post-components/components/post.service"
import { onMounted, ref } from "vue"

export function fetchPosts(page: number, limit: number) {
  const posts = ref<Post[]>([])
  const totalLoadedPosts = ref(0)
  const totalPosts = ref(0)
  const totalPages = ref(0)
  const isPostsLoading = ref(true)

  const fetching = async () => {    
    try {
      await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
      const response = await getPosts(page, limit)
      posts.value = response.data
      totalLoadedPosts.value = posts.value.length
      totalPosts.value = Number(response.headers['x-total-count']) || 0
      totalPages.value = Math.ceil(totalPosts.value / limit) || 0
    } catch (error) {
      console.error('[**Error fetching posts**]:', error)
    } finally {
      isPostsLoading.value = false
    }
    
}
  onMounted(fetching)
  return { posts, totalLoadedPosts, totalPosts, totalPages, isPostsLoading }
}

