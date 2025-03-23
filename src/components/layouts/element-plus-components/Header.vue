<template>
  <header class="header">
    <slot>🔝 Заголовок по умолчанию</slot>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background: #007bff;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
