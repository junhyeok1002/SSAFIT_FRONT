<template>
  <div>
    <input 
      type="text" 
      v-model="keyword" 
      style="width: 80%; height: 2.2rem; padding: 0.5rem;" 
      placeholder="Youtube 영상을 검색할 수 있습니다." 
    />
    <!-- <button  style="width: 3rem; height: 2rem;"> 검색</button> -->
    <img 
      ref="searchButton"
      @click="search" 
      src="@/assets/img/Search.png" 
      alt="Search" 
      style="width: 2rem; height: 2rem; background-color: white;" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useYoutubeStore } from '@/stores/youtube';
import { useRoute } from 'vue-router';

const store = useYoutubeStore();
const route = useRoute();

const keyword = ref('');
const searchButton = ref(null);

const search = () => {
  store.youtubeSearch(keyword.value);
};

onMounted(() => {
  if (route.params.fitnessId) {
    keyword.value = route.params.fitnessId;
    // 페이지 로딩 후 자동으로 검색 버튼 클릭
    if (searchButton.value) {
      searchButton.value.click();
    }
  }
});

</script>
