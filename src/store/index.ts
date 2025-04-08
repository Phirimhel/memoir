import { createStore } from 'vuex'
import { PostModule } from './post-module'

import type { State as PostsState } from './post-module'

export interface RootState {
  likes: number
  postsStore: PostsState
}

export default createStore({
  state: {
    likes: 0,
  },
  modules: {
    postsStore: PostModule,
  },
})