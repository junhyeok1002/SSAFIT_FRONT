<script setup>
import { useReviewStore } from '@/stores/useReviewStore';
import { useRoute,useRouter } from 'vue-router'
import { onMounted,ref } from 'vue';
import { useUserStore } from '@/stores/useUserStore';

const route = useRoute();
const router = useRouter();
const reviewStore = useReviewStore();
const userStore = useUserStore();
console.log(userStore.user);
onMounted(async () => {
    await reviewStore.getReview(route.params.id);
    await reviewStore.getValue();
})

//현재 저장소에 해당 리뷰의 정보가 존재하는 상태
const update = function() {
    router.push({name:'update'})
}

const remove = function() {
    console.log("삭제?",route.params.id);
    console.log(reviewStore.review);
    
    reviewStore.removeReview(route.params.id);
}

</script>

<template>
    <div class="container mt-4">
      <h1 class="mb-4 text-center">게시판</h1>
      <div class="col-sm-12 bg-white p-4 border rounded">
        <div class="post-header mb-4">
          <h2>{{ reviewStore.review.title }}</h2>
          <div class="text-muted">작성자: {{ reviewStore.review.userName }} | 날짜: {{ reviewStore.review.createTime }}</div>
        </div>
        <div class="post-content mb-4">
          <p>{{ reviewStore.review.content }}</p>
        </div>
        <div v-if="userStore.user !== null && reviewStore.review.userId === userStore.user.id" class="text-right mt-4">
          <button class="btn btn-primary mr-2" @click="update">수정</button>
          <button class="btn btn-danger" @click="remove">삭제</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .post-header h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .post-header .text-muted {
    font-size: 0.9rem;
  }
  
  .post-content p {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .text-right {
    text-align: right;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .bg-white {
    background-color: #fff;
    text-align: justify;
  }
  </style>
  