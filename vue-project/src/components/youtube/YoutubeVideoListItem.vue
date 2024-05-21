<template>
  <li @click="clickVideo">
    <img :src="video.snippet.thumbnails.default.url">
    <p style="text-align: left;">{{ video.snippet.title }}</p>
  </li>
</template>

<script setup>
import { useYoutubeStore } from '@/stores/youtube';
// import { defineProps } from 'vue';
const store = useYoutubeStore()

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const clickVideo = function(){
  store.clickVideo(props.video)
}



</script>

<style scoped>
    li {
        display: flex;
        align-items: center; /* 세로 정렬 설정 */
    }

    li img {
        margin-right: 10px; /* 이미지와 제목 사이 간격 조정 */
    }

    li span {
        white-space: nowrap; /* 제목이 길어질 경우 줄 바꿈 방지 */
    }
</style>
