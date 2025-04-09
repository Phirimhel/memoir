export default {
  mounted(el: HTMLElement) {
    el.focus()
    console.log('focus', el)
  },
  name: 'focus',
}
