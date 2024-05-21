<template>
  <div >
    <img src="@/assets/img/Youtube.png" alt="Youtube" style="width: 10rem; margin-top: 2rem; margin-bottom: 2rem;"  />
    <br/><br/>
    <YoutubeVideoSearch/>
    
    <YoutubeVideoDetail/>

    <YoutubeVideoList/>
  </div>
</template>

<script setup>
import YoutubeVideoSearch from '@/components/youtube/YoutubeVideoSearch.vue'
import YoutubeVideoList from '@/components/youtube/YoutubeVideoList.vue'
import YoutubeVideoDetail from '@/components/youtube/YoutubeVideoDetail.vue'



</script>


<style scoped></style>
