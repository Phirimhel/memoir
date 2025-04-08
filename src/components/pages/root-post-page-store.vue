<template>
  
    <div class="header-container">
      <my-button @click="openFormDialog">Create Post</my-button>
      <my-input :modelValue="searchQuery" @update:modelValue="setSearchQuery" placeholder="Search" /> 
      <my-select :options="options" :modelValue="selectedOption" @update:modelValue="setSelectedOption" placeholder="Sort by" /> 
    </div>

    <div class="post-total-container">
      <el-tag type="warning" style="width: 105px">Total posts: {{ totalPosts }}</el-tag>
      <el-tag type="success">Total loaded posts: {{ totalLoadedPosts }}</el-tag>
      <el-tag type="success">Possible pages: {{ totalPages }}</el-tag>
    </div>

    <my-dialog v-model="dialogFormVisible" title="Create post">
      {{ formLoading }}
      <post-form :formTitle="'Create post'" @emitCreatePost="createPost" :formLoading="formLoading"/>
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" :loading="loading" />

   
  <div v-if="!loading" v-intersection="loadMorePosts" class="observer"></div>
  
</template>

<script lang="ts">
import PostForm from '../post-components/components/post-form.vue'
import PostList from '../post-components/components/post-list.vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'


export default {
  name: 'RootPostPage',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogFormVisible: false,
    }
  },

  async mounted() {
    this.fetchPosts();
  },

  methods: {
    openFormDialog() {
      this.dialogFormVisible = true
    },
    ...mapMutations({
      setPosts: 'postsStore/setPosts',
      setSearchQuery: 'postsStore/setSearchQuery',
      setSelectedOption: 'postsStore/setSelectedOption',
    }),
    ...mapActions({
      loadMorePosts: 'postsStore/loadMorePosts',
      fetchPosts: 'postsStore/fetchPosts',
      createPost: 'postsStore/createPost',
    }),
  },

  computed: {
    ...mapState({
    posts: state => state.postsStore.posts, 
    loading: state => state.postsStore.loading,
    formLoading: state => state.postsStore.formLoading,
    options: state => state.postsStore.options,
    selectedOption: state => state.postsStore.selectedOption,
    searchQuery: state => state.postsStore.searchQuery,
    page: state => state.postsStore.page,
    limit: state => state.postsStore.limit,
    totalLoadedPosts: state => state.postsStore.totalLoadedPosts,
    totalPosts: state => state.postsStore.totalPosts,
    totalPages: state => state.postsStore.totalPages,
    }),

    ...mapGetters({
      sortedPosts: 'postsStore/sortedPosts',
      sortedAndSearchedPosts: 'postsStore/searchedSortedPosts',
    }),
  },
 
}
</script>

<style scoped>
.el-button {
  margin-bottom: 15px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.el-select {
  max-width: 150px;
}

.el-input {
  height: 32px;
}

.el-pagination {
  margin-top: 20px;
}

.post-total-container {
  margin-bottom: 20px;
  display: flex;
  justify-content: start;
  gap: 10px;
}

.observer {
  height: 120px;
}
</style>
