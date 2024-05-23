<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { useReviewStore } from '@/stores/useReviewStore';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'
import Header from '@/components/Header.vue';
import RoutineFavComponent from '@/components/routine/RoutineFavComponent.vue';
import RoutineDoneComponent from '@/components/routine/RoutineDoneComponent.vue';



const userStore = useUserStore();
const reviewStore = useReviewStore();
const user = userStore.user;
const userFav = JSON.parse(user.favorite);
const routineInfo = JSON.parse(user.favorite);
// userStore.idToName(user.favoriteRoutine);

console.log(user.favoriteRoutine[0]);
const router = useRouter();

const reviewDetail = function (id) {
  console.log("딸깍", id);
  router.push({ name: 'detail', params: { id: id } });
}

const update = function () {
  router.push({ name: 'userUpdate' })
}

const home = function () {
  router.push({ name: 'main' })
}
</script>

<template>
  <div>
    <Header />
    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div id="Header1">{{ user.name }}님의 마이페이지</div>
        <!-- <div>
          <button class="btn btn-primary" @click="update">수정하기</button>
        </div> -->
      </div>
      <hr>

      <div style="display: flex; height: 78vh; ">

        <div style="width: 33%; max-height: 100%; overflow-y: scroll; padding: 0px;">
          <div id="LeftTitle">
            즐겨찾기 루틴
            <hr>
          </div>

          <RoutineFavComponent v-for="(value, key, index) in user.favoriteRoutine" :key="index" :value="value"
            :routineId="routineInfo[key]" />

        </div>
        <div style="width: 33%; max-height: 100%; overflow-y: scroll; padding: 0px;">
          <div id="LeftTitle">
            완료한 루틴
            <hr>
          </div>

          <RoutineDoneComponent v-for="routine in user.doneRoutine" :key="routine" :routine="routine" />
        </div>
        <div style="width: 33%; max-height: 100%; overflow-y: scroll; padding: 0px;">
          <div id="LeftTitle">
            작성한 게시글
            <hr>
          </div>

          <div v-for="(value, index) in userStore.userList" :key="index">
            <button style="width: 100%;" v-if="value.title.length > 4" class="btn btn-outline-secondary mb-2"
              @click="reviewDetail(value.reviewId)">
              제목 : {{ value.title.substring(0, 10) }}.. <br>
              작성자 : {{ value.userName }} <br>
              작성일자 : {{ value.createTime }} <br>
              조회수 : {{ value.viewCnt }}
            </button>

            <button v-else style="width: 100%;" class="btn btn-outline-secondary mb-2"
              @click="reviewDetail(value.reviewId)">
              제목 : {{ value.title }} <br>
              작성자 : {{ value.userName }} <br>
              작성일자 : {{ value.createTime }} <br>
              조회수 : {{ value.viewCnt }}
            </button>
          </div>
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

h2,
h3 {
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

#Header1 {
  font-weight: bold;
  font-size: 1.5rem;
}

#LeftTitle {
  position: sticky;
  top: 0;
  background-color: white;
  font-weight: bold;
  font-size: 1rem;
  /* margin-top: 1rem; */
  z-index: 1000;
  padding-top: 1rem;
}
</style>