<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { useReviewStore } from '@/stores/useReviewStore';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'
import Header from '@/components/Header.vue';
import favList from '@/components/routine/favList.vue'


const userStore = useUserStore();
const reviewStore = useReviewStore();
const user = userStore.user;
// userStore.idToName(user.favoriteRoutine);

console.log(user.favoriteRoutine[0]);
const router = useRouter();

const reviewDetail= function(id) {
    console.log("딸깍",id);
    router.push({name:'detail',params:{id:id}});
}

const update = function() {
    router.push({name:'userUpdate'})
}

const home = function() {
  router.push({name:'main'})
}
</script>

<template>
    <Header/>
    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h1>{{ user.name }}님의 마이페이지</h1>
        <div>
          <button class="btn btn-primary" @click="update">수정하기</button>
        </div>
      </div>
      <div class="d-flex">
        <div class="border p-3 mr-3 flex-grow-1">
          <div class="mb-4">
            <h3>즐겨찾기 한 운동들</h3>
            <favList/>
          </div>
          <div>
            <h3>끝낸 운동들</h3>
            <div class="border p-2 mb-2" v-for="(done, index) in user.doneRoutine" :key="index">
              <span v-for="(d, key) in done" :key="key">
                {{ d }}
              </span>
            </div>
          </div>
        </div>
        <div class="border p-3 flex-grow-1">
          <h2>작성한 게시글</h2>
          <div v-for="(value, index) in userStore.userList" :key="index">
            <button style="width: 100%;" v-if="value.title.length > 4" class="btn btn-outline-secondary mb-2" @click="reviewDetail(value.reviewId)">
                제목 : {{ value.title.substring(0,4) }}..  |  작성일자 : {{ value.createTime }}
            </button>
            <button v-else style="width: 100%;" class="btn btn-outline-secondary mb-2" @click="reviewDetail(value.reviewId)">
              제목 : {{ value.title }}  |  작성일자 : {{ value.createTime }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  h2, h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .border {
    border: 1px solid #dee2e6;
    border-radius: 5px;
  }
  
  .p-3 {
    padding: 1rem;
  }
  
  .mr-3 {
    margin-right: 1rem;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  </style>
  