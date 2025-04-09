import { Post } from '@/entities/posts/types'
import { getPosts } from '@/entities/posts/apis/getPosts.service'

enum AllowedSelectionKeys {
  TITLE = 'title',
  BODY = 'body',
  ID = 'id',
}

export interface State {
  posts: Post[]
  loading: boolean
  formLoading: boolean
  options: { value: 'title'; label: 'name' }[]
  selectedOption: AllowedSelectionKeys
  searchQuery: string
  page: number
  limit: number
  totalLoadedPosts: number
  totalPosts: number
  totalPages: number
}

export const PostModule = {
  //! state
  state: () => ({
    posts: [] as Post[],
    loading: false,
    formLoading: false,
    options: [
      { value: 'id', label: 'sort by id' },
      { value: 'title', label: 'sort by title' },
      { value: 'body', label: 'sort by body' },
    ],
    selectedOption: AllowedSelectionKeys.ID,
    searchQuery: '',
    page: 1,
    limit: 6,
    totalLoadedPosts: 0,
    totalPosts: 0,
    totalPages: 0,
  }),
  //! getters
  getters: {
    //* sort posts by selected option
    sortedPosts(state: State): Post[] {
      let key = state.selectedOption
      return [...state.posts].sort((postA, postB) => {
        if (key === AllowedSelectionKeys.ID) {
          return postA[key] - postB[key]
        }
        return postA[key].localeCompare(postB[key])
      })
    },

    //* search posts by search query
    searchedSortedPosts(state: State, getters): Post[] {
      state.totalLoadedPosts = state.posts.length
      return getters.sortedPosts.filter((post) => {
        return post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      })
    },
  },
  //! mutations
  mutations: {
    setPosts(state: State, posts: Post[]) {
      state.posts = posts
    },
    setLoading(state: State, loading: boolean) {
      state.loading = loading
    },
    setFormLoading(state: State, loading: boolean) {
      state.formLoading = loading
    },
    setSelectedOption(state: State, option: AllowedSelectionKeys) {
      state.selectedOption = option
    },
    setSearchQuery(state: State, query: string) {
      state.searchQuery = query
    },
    setPage(state: State, page: number) {
      state.page = page
    },
    setTotalLoadedPosts(state: State, total: number) {
      state.totalLoadedPosts = total
    },
    setTotalPosts(state: State, total: number) {
      state.totalPosts = total
    },
    setTotalPages(state: State, total: number) {
      state.totalPages = total
    },
  },
  //! actions
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true)
        await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        console.log('fetching posts', state.page, state.limit)
        const response = await getPosts(state.page, state.limit)
        const totalPosts = Number(response.headers['x-total-count']) || 0
        commit('setPosts', response.data)
        commit('setTotalPosts', totalPosts)
        commit('setTotalPages', Math.ceil(state.totalPosts / state.limit) || 0)
      } catch (error) {
        console.error('[**Error fetching posts**]:', error)
      } finally {
        commit('setLoading', false)
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        const response = await getPosts(++state.page, state.limit)
        commit('setPosts', [...state.posts, ...response.data])
      } catch (error) {
        console.error('[**Error fetching posts**]:', error)
      } finally {
      }
    },

    async createPost({ state, commit }, post: Post) {
      try {
        commit('setFormLoading', true)
        await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
        commit('setPosts', [post, ...state.posts])
      } catch (error) {
        console.error('[**Error creating post**]:', error)
      } finally {
        commit('setFormLoading', false)
      }
    },
  },
  namespaced: true,
}
