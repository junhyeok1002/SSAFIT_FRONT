<template>
  <div>
    <hr v-if="store.selectedVideo">
    <div v-if="store.selectedVideo">
      <iframe width="90%" height="315" :src="videoURL" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script setup>
import { useYoutubeStore } from '@/stores/youtube';
import { computed } from 'vue'
const store = useYoutubeStore();

const videoURL = computed(() => {
  const videoId = store.selectedVideo.id.videoId
  return `https://www.youtube.com/embed/${videoId}`
})


</script>

<style scoped></style>
