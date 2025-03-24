<template>
  <div :class="colorMode">
    <div class="theme-controls">
      <el-button-group>
        <el-button @click="colorMode = 'light'" :type="colorMode === 'light' ? 'primary' : ''"
          >Light</el-button
        >
        <el-button @click="colorMode = 'dark'" :type="colorMode === 'dark' ? 'primary' : ''"
          >Dark</el-button
        >
        <el-button @click="colorMode = 'dim'" :type="colorMode === 'dim' ? 'primary' : ''"
          >Dim</el-button
        >
        <el-button @click="colorMode = 'cafe'" :type="colorMode === 'cafe' ? 'primary' : ''"
          >Cafe</el-button
        >
      </el-button-group>
    </div>
    <MainLayout />
  </div>
</template>

<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import { useColorMode } from '@vueuse/core'
import '@/styles/themes.scss'

const colorMode = useColorMode({
  modes: {
    light: 'light',
    dark: 'dark',
    dim: 'dim',
    cafe: 'cafe',
  },
})
</script>

<style lang="scss" scoped>
.theme-controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
