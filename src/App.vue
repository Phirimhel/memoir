<template>
  <MainLayout />
</template>

<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
</script>

<style scoped>
#app {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  background-color: #f5f5f5;
  line-height: 1.6;
  background: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.container {
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  overflow: hidden;
  overflow-x: hidden;
}
</style>
