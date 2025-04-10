<template>
{{ count }}
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    function increment() {
      // .value необходимо в JavaScript
      count.value++
    }

    // не забудьте также передать функцию.
    return {
      count,
      increment
    }
  }
}
</script>
