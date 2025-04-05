export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

export interface ApiResponse<T> {
  status: number
  data: T
  headers: Record<string, string | string[]>
}
