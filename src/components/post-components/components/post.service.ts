import type { Post, ApiResponse } from './models'
import axios from 'axios'

export const getPosts = async (): Promise<ApiResponse<Post[]>> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const postsResponse: ApiResponse<Post[]> = {
    data: response.data,
    status: response.status,
  }
  return postsResponse
}
