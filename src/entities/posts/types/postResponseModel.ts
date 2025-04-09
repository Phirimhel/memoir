export interface ApiResponse<T> {
  status: number
  data: T
  headers: Record<string, string | string[]>
}
