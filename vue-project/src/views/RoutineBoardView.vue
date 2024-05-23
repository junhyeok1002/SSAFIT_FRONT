<script setup>
import { useReviewStore } from '@/stores/useReviewStore';
import { useUserStore } from '@/stores/useUserStore';
import { computed, onMounted, ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue';
import RoutineBoardComponent from '@/components/routine/RoutineBoardComponent.vue';

const router = useRouter();
const reviewStore = useReviewStore();
const userStore = useUserStore();
const userInfo = userStore.user;

//검색 조건
const selected = ref({
  reviewTitle: null,
  reviewAuthorName: null,
  reviewDirection: null,
  reviewRoutineId: 0,
})

console.log("aaaaaaaaa", selected.value);

const currentPage = ref(1);
const perPage = 7;

const detail = function (id) {
  console.log("게시글의 아이디 ", id);
  router.push({ name: 'detail', params: { id: id } })
}

onMounted(async () => {
  await reviewStore.getReviewList();
  console.log("조건잇슴", selected.value);
  // await nextTick();
  console.log("onmouted", reviewStore.reviewList.length, reviewStore.page.value);
})

const currentPageBoardList = computed(() => {
  return reviewStore.reviewList.slice(
    (currentPage.value - 1) * perPage,
    currentPage.value * perPage
  );
});

// 검색
const search = function () {
  console.log("지금까지의 검색 기준 ", selected.value);

  reviewStore.searchReview(selected.value);
}

const pagination = function (page) {
  console.log("페이지", page);
  currentPage.value = page;
}
console.log(reviewStore.reviewList.length);

const update = async function (id) {
  await reviewStore.getReview(id);
  router.push({ name: 'update', params: { id: id } })
}

const remove = async function (id) {
  await reviewStore.removeReview(id);
  location.reload();
}

//루틴 아이디로 생성된 파란색 버튼을 아무거나 누르면
//루틴 즐찾
const addRoutine = function (routineId) {
  router.push({ name: 'RoutineDetailView', params: { routineId: routineId } });
}



</script>


<template>
  <div>
    <Header />
    <div class="container mt-4 board">
      <h1 class="text-center mb-4">루틴 게시판</h1>

      <div class="box mb-4" style="display: flex;">
        <select v-model="selected.reviewRoutineId">
          <option disabled value="">루틴선택</option>
          <!-- <option value="" selected>루틴선택</option> -->
          <option v-for="i in 3" :key="i">{{ i }}</option>
        </select>
        <select v-model="selected.reviewDirection">
          <option disabled value="">조회수</option>
          <option>오름차순</option>
          <option>내림차순</option>
        </select>
        <input v-model="selected.reviewTitle" placeholder="제목" class="form-control mb-2">
        <input v-model="selected.reviewAuthorName" placeholder="작성자명" class="form-control mb-2">
        <button @click="search" class="button">검색</button>
      </div>
      
    </div>



    <div>
      <div v-for="review in currentPageBoardList" :key="review.reviewId"
        class="col-sm-9 bg-light p-3 border rounded mb-3 mx-auto" style="width: 80%;">
        <div style="display: flex; width: 100%;">
          <div style="width: 50%;">
            <div class="card" @click="detail(review.reviewId)">
              <h1 class="card-title"> 『 {{ review.title }} 』</h1>

              <div @click="detail(review.reviewId)" class="text-muted"
                style="width: 100%; text-align: right; margin: 0;">
                {{ review.userName }} | {{
                  review.createTime }} | 조회수 {{ review.viewCnt }}
              </div>

              <hr style="margin-top: 0rem;">
              <div @click="detail(review.reviewId)" v-if="review.content.length < 15" class="content">
                "{{ review.content }}"
              </div>
              <div @click="detail(review.reviewId)" v-else class="content">
                "{{ review.content.substring(0, 15) }}..."
              </div>
              <div class="title">
                <span class="text-decoration-none text-dark" style="font-size: 0.8rem;">
                  <!-- {{  review  }} -->
                  Routine {{ review.routine }} 운동 후기
                </span>
              </div>
              <div class="row mt-2">

                <!-- <div class="col-auto">
                  <template v-if="userInfo !== null && review.userId === userInfo.id">
                    <button class="btn btn-outline-dark btn-sm ml-2" @click="update(review.reviewId)">수정</button>
                    <button class="btn btn-outline-danger btn-sm ml-2" @click="remove(review.reviewId)">삭제</button>
                  </template>
</div> -->
              </div>
            </div>
          </div>

          <div style="width: 50%;">
            <RoutineBoardComponent :value="review.routineId" :routineId="review.routine" />
          </div>
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

.card {
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 20px;
  padding-top: 0.9rem;
  width: 100%;
  margin: 0 auto;
  margin-right: 0.3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 10rem;
}

.card-title {
  margin: 0;
  padding: 0;
  font-size: 1.1em;
  color: #333;
  text-align: left;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #9dbfd3;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 99%;
  font-weight: bold;  
}

.button.button{
  margin-top: 0rem;
  height: 38px;
  padding: 5px 20px;
}


.button:hover {
  background-color: #4556a0;
}
</style>