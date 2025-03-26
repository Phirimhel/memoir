<template>
  <el-input v-model="message" style="width: 240px" placeholder="Please input" />
  <p v-if="message">{{ message }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
</script>

<style scoped></style>
<style></style>
