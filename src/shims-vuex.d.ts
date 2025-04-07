import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RootState } from './store'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss' {
  const content: string
  export default content
}
