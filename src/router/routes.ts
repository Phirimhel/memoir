export const routes = {
  posts: '/main/content/posts',
  postsStore: '/main/content/posts-store',
  postsStoreComposition: '/main/content/posts-store-composition',
  settings: '/main/content/settings',
  postDetail: (id: number) => `/main/content/posts/${id}`,
  postDetailStore: (id: number) => `/main/content/posts-store/${id}`,
}
