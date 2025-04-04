// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import AppMainLayout from '@/components/layouts/app-main-layout.vue'
import Content from '@/components/layouts/element-plus-components/main-content.vue'
import RootPostPage from '@/components/pages/root-post-page.vue'
import RootSettingsPage from '@/components/pages/root-settings-page.vue'
import PostDetail from '@/components/post-components/components/post-detail.vue'
const routes = [
  {
    path: '/',
    redirect: '/main',
    children: [
      {
        path: 'main',
        component: AppMainLayout,
        children: [
          {
            path: 'content',
            component: Content,
            children: [
              {
                path: 'posts',
                component: RootPostPage,
              },
              {
                path: 'posts/:id',
                component: PostDetail,
              },
              {
                path: 'settings',
                component: RootSettingsPage,
              },
            ],
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
