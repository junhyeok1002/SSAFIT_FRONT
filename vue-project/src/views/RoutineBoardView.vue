<script setup>
import { useReviewStore } from '@/stores/useReviewStore';
import { useUserStore } from '@/stores/useUserStore';
import { computed,onMounted,ref } from 'vue';
import { useRouter,RouterLink } from 'vue-router'

const router = useRouter();
const reviewStore = useReviewStore();
const userStore = useUserStore();
const userInfo = userStore.user;

//검색 조건
const selected = ref({
    reviewTitle:null,
    reviewAuthorName:null,
    reviewDirection:null,
    reviewRoutineId:0,
})

console.log("aaaaaaaaa",selected.value);

const currentPage = ref(1);
const perPage = 7;

const detail = function(id) {
    console.log("게시글의 아이디 ",id);
    router.push({name : 'detail', params : {id : id}})
}

onMounted(async ()=> {
    await reviewStore.getReviewList();
    console.log("조건잇슴",selected.value);
    // await nextTick();
    console.log("onmouted",reviewStore.reviewList.length,reviewStore.page.value);
})

const currentPageBoardList = computed(() => {
  return reviewStore.reviewList.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  );
});

// 검색
const search = function() {
    console.log("지금까지의 검색 기준 ",selected.value);

    reviewStore.searchReview(selected.value);
}

const pagination = function(page) {
    console.log("페이지",page);
    currentPage.value=page;
}
console.log(reviewStore.reviewList.length);

const update = async function(id) {
    await reviewStore.getReview(id);
    router.push({name:'update',params:{id:id}})
}

const remove =  async function(id) {
    await reviewStore.removeReview(id);
    location.reload();
}


</script>


<template>
    <div class="container mt-4 board">
      <h1 class="text-center mb-4">루틴 게시판</h1>
      <div class="box mb-4" style="display: flex;">
        <input v-model="selected.reviewTitle" placeholder="제목" class="form-control mb-2">
        <input v-model="selected.reviewAuthorName" placeholder="작성자명" class="form-control mb-2">
        <select v-model="selected.reviewRoutineId" class="form-control mb-2">
          <option disabled value="루틴선택">루틴</option>
          <option v-for="i in 3" :key="i">{{ i }}</option>
        </select>
        <select v-model="selected.reviewDirection" class="form-control mb-2">
          <option disabled value="">조회수</option>
          <option>오름차순</option>
          <option>내림차순</option>
        </select>
        <button @click="search" class="btn btn-primary w-100">검색</button>
      </div>
  
      <div @click="detail(review.reviewId)" v-for="review in currentPageBoardList" :key="review.reviewId" class="col-sm-9 bg-light p-3 border rounded mb-3 mx-auto">
        <div class="title">
            <span class="text-decoration-none text-dark">
                {{ review.title }}
            </span>
        </div>
        <div v-if="review.content.length < 15" class="content">
          {{ review.content }}
        </div>
        <div v-else class="content">
          {{ review.content.substring(0, 15) }}...
        </div>
        <div class="row mt-2">
          <div class="col-auto me-auto text-muted">{{ review.userName }} | {{ review.createTime }}</div>
          <div class="col-auto">
            {{ review.viewCnt }}
            <template v-if="userInfo !== null && review.userId === userInfo.id">
              <button class="btn btn-outline-dark btn-sm ml-2" @click="update(review.reviewId)">수정</button>
              <button class="btn btn-outline-danger btn-sm ml-2" @click="remove(review.reviewId)">삭제</button>
            </template>
          </div>
        </div>
        <div class="mt-2">
          <button class="btn btn-outline-primary btn-sm mr-1" v-for="i in review.routineId" :key="i">
            {{ i }}
          </button>
        </div>
      </div>
  
      <nav aria-label="Page navigation example" class="mt-4">
        <ul class="pagination justify-content-center">
          <li v-for="i in reviewStore.page" :key="i" class="page-item">
            <a class="page-link" href="#" @click="pagination(i)">{{ i }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <style scoped>
  .board {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .box input,
  .box select {
    margin-bottom: 0.5rem;
  }
  
  .box button {
    margin-top: 0.5rem;
  }
  
  .title a {
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .title a:hover {
    text-decoration: underline;
  }
  
  .content {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  
  .text-muted {
    font-size: 0.9rem;
  }
  
  button.ml-2 {
    margin-left: 0.5rem;
  }
  
  button.mr-1 {
    margin-right: 0.5rem;
  }
  </style>
  