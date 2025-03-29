import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'
import './styles/themes.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import postUI from '@/components/post-components/UI'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

for (const [key, component] of Object.entries(postUI)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')
