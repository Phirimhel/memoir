<template>
  <div style="border: 1px solid green; padding: 10px; margin: 10px">
    <h3>🟢 ChildOne (с зависимостью от пропа)</h3>
    <p>Счётчик из пропса: {{ counter }}</p>
  </div>
</template>

<script setup>
import { onUpdated } from 'vue'

const props = defineProps({
  counter: Number,
})

onUpdated(() => {
  console.log('🔁 🟢 ChildOne перерендерен')
})
</script>
