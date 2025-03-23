<template>
    <div class="photos-container">
      <div v-if="photos.length" class="photos-grid">
        <div v-for="photo in photos" :key="photo.id" class="photo-card">
          <img :src="photo.thumbnailUrl" :alt="photo.title">
          <p>{{ photo.title }}</p>
        </div>
      </div>
      <div v-else>Loading photos...</div>
    </div>
  </template>


<script setup lang="ts">
import tombService from '@/services/tombService'
import { ref, onMounted } from 'vue'

const photos = ref([])

onMounted(async () => {
  try {
    photos.value = await tombService.getPhotos()
  } catch (error) {
    console.error('Error loading photos:', error)
  }
})
</script>

<style scoped>
.photos-container {
  width: 100%;
  padding: 20px;
}

.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.photo-card {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.photo-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.photo-card p {
  margin-top: 8px;
  font-size: 0.9em;
  color: #666;
}
</style>

