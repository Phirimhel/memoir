import { createRouter, createWebHistory } from 'vue-router'

import AppMainLayout from '@/shared/UI/layouts/app-main-layout.vue'
import Content from '@/shared/UI/layouts/element-plus-components/main-content.vue'
import RootPostPage from '@/pages/root-post-page.vue'
import RootSettingsPage from '@/pages/root-settings-page.vue'
import RootPostPageStore from '@/pages/root-post-page-store.vue'
import RootPostPageStoreComposition from '@/pages/root-post-page-store-compostition.vue'
import PostDetail from '@/entities/posts/ui/post-detail.vue'
import DinamycAttribute from '@/pages/tests/dinamycAttribute.vue'
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
              {
                path: 'posts-store',
                component: RootPostPageStore,
              },
              {
                path: 'posts-store/:id',
                component: PostDetail,
              },
              {
                path: 'posts-store-composition',
                component: RootPostPageStoreComposition,
              },
                {
                  path: 'posts-store-composition/:id',
                  component: PostDetail,
                },
                {
                  path: 'tests/dinamyc-attribute',
                  component: DinamycAttribute,
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
