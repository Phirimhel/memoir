import type { Post, ApiResponse } from './models'
import axios from 'axios'

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts'

export const getPosts = async (page?: number, limit?: number): Promise<ApiResponse<Post[]>> => {
  const queryParams = new URLSearchParams()

  if (page) {
    queryParams.append('_page', page.toString())
  }

  if (limit) {
    queryParams.append('_limit', limit.toString())
  }

  const queryString = queryParams.toString()
  const url = queryString ? `${POST_API_URL}?${queryString}` : POST_API_URL

  const response = await axios.get(url)
  const postsResponse: ApiResponse<Post[]> = {
    data: response.data,
    status: response.status,
    headers: response.headers as Record<string, string | string[]>,
  }
  return postsResponse
}
