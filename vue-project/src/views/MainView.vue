<script setup>
import Header from '@/components/Header.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import { useUserStore } from '@/stores/useUserStore';
import { useReviewStore } from '@/stores/useReviewStore';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue'
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
    <div id="app">
      <Header />
      <CarouselComponent />

      <div style="display: flex; height: 50vh; ">

        <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
          <div id="LeftTitle">
            즐겨찾기 루틴
            <hr>
          </div>

          <RoutineFavComponent v-for="(value, key, index) in user.favoriteRoutine" :key="index" :value="value"
            :routineId="routineInfo[key]" />

        </div>
        <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
          <div id="LeftTitle">
            완료한 루틴
            <hr>
          </div>

          <RoutineDoneComponent v-for="routine in user.doneRoutine" :key="routine" :routine="routine" />
        </div>
      </div>
    </div>›
  </div>
</template>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
}

#LeftTitle {
  position: sticky;
  top: 0;
  background-color: white;
  font-weight: bold;
  font-size: 1.2rem;
  /* margin-top: 1rem; */
  z-index: 1000;
  padding-top: 1rem;
}
</style>
