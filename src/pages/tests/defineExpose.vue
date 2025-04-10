<template>
    <div v-if="visible">
      Я — диалог!
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const visible = ref(false)
  
  function open() {
    visible.value = true
  }
  
  function close() {
    visible.value = false
  }
  
  // Раскрываем методы для родителя
  defineExpose({
    open,
    close
  })
  </script>
  