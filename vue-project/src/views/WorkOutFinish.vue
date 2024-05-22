<template>
  <div>
    <div id="LeftTitle">
      <h4>운동 완료</h4>
      <hr>
    </div>

    <div class="link-container" style="margin-bottom: 1rem;">
      <div class="link-item">
        <div class="button" @click="addToFavorites">즐겨찾기 등록</div>
      </div>
      <div class="link-item">
        <div class="button" @click="goToHome">홈으로</div>
      </div>
      <div class="link-item">
        <div class="button" @click="goToReview">후기 작성</div>
      </div>
    </div>

    <div style="display: flex; height: 80vh; ">
      <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
        <div id="LeftTitle">
          선택한 운동 순서
          <hr>
        </div>

        <div style="padding: 0.5rem;">
          <div v-if="finishResult.length > 0">
            <FitnessComponent v-for="fitness in finishResult" :key="fitness.e_name" :fitness="fitness" />
            <br>
          </div>
        </div>

      </div>
      <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
        <RoutineChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';
import RoutineChart from '@/components/routine/RoutineChart.vue';
import FitnessComponent from '@/components/routine/FitnessComponent.vue';


// finishResult 변수를 ref()로 초기화
const finishResult = ref('');
const userStore = useUserStore()

// 컴포넌트가 마운트된 후 실행되는 함수
onMounted(() => {
  // 로컬 스토리지에서 finishResult 값을 가져와 할당
  const storedFinishResult = localStorage.getItem('finishResult');

  // localStorage.removeItem('finishResult');
  if (storedFinishResult) {
    finishResult.value = JSON.parse(storedFinishResult);
  }
});

const router = useRouter();

const addToFavorites = function() {
    // router.push({name:'fav'});
    userStore.registFavorite();
    alert("즐겨찾기 해라!!!!!!!코드 구현하는 너말이야!!");
}

const goToHome = function() {
    router.push({name:'main'});
}

const goToReview = function() {
  alert("후기작성 구현 해라!!!!!!!코드 구현하는 너말이야!!");
}


</script>



<style scoped>
#LeftTitle {
  position: sticky;
  top: 0;
  background-color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.top-section,
.bottom-section {
  flex: 1;
  overflow-y: scroll;
  height: 50%;
  /* 스크롤바가 필요할 경우를 대비하여 설정 */
}

.link-container {
        display: flex;
        width: 50%;
        margin: 0 auto;
    }
    .link-item {
        flex: 1;
        text-align: center;
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
    .button:hover {
        background-color: #4556a0;
    }
</style>