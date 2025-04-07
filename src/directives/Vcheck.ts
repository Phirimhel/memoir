import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('click', () => {
      console.log('Clicked element:', el)
      if (binding.value) {
        binding.value(el)
      }
    })
  },
  name: 'check',
}