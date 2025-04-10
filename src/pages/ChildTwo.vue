<template>
  <div style="border: 1px solid blue; padding: 10px; margin: 10px">
    <h3>🔵 ChildTwo (НЕ зависит от пропсов)</h3>
    <p>Всегда одинаковый текст</p>
  </div>
</template>

<script setup>
import { onUpdated } from 'vue'

onUpdated(() => {
  console.log('🔁 🔵 ChildTwo перерендерен')
})
</script>
