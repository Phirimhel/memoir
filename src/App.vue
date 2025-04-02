<template>
  <MainLayout />
</template>

<script setup lang="ts">
import MainLayout from '@/components/layouts/app-main-layout.vue'
import '@/shared/lib/styles/themes.scss'
</script>

<style lang="scss" scoped>
* {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
