import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import '@/shared/lib/styles/themes.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import my_ui from '@/shared/UI'
import router from './components/router/router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

for (const [key, component] of Object.entries(my_ui)) {
  app.component(key, component)
}

app.use(ElementPlus).use(router).mount('#app')
