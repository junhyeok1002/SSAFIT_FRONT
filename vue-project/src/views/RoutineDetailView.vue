<template>
    <div>
        <Header />
        <div>
            <div>
                <div id="Header1">루틴 디테일</div>
            </div>

            <div class="link-container">
                <div class="link-item">
                    <div class="button" @click="addToFavorites">즐겨찾기 등록</div>
                </div>
                <div class="link-item">
                    <div class="button" @click="goToHome">홈으로</div>
                </div>
                <div class="link-item">
                    <div class="button" @click="startExercise">운동하기</div>
                </div>
            </div>
            <br>

            <div style="display: flex; height: 75vh; ">
                <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
                    <RoutineAnalysis />
                </div>
                <div style="width: 50%; max-height: 100%; overflow-y: scroll; padding: 0px;">
                    <RoutineChart />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import RoutineAnalysis from '@/components/routine/RoutineAnalysis.vue'
import RoutineChart from '@/components/routine/RoutineChart.vue'
import { useMuscleStore } from '@/stores/routine';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';
import Header from '@/components/Header.vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
const userStore = useUserStore()

onMounted(() => {
    store.getRoutineDetail();
})

const addToFavorites = function () {
    // router.push({name:'fav'});
    userStore.registFavorite();
}

const goToHome = function () {
    router.push({ name: 'main' });
}

const startExercise = function () {
    router.push({ name: 'workout' });
}

</script>


<style scoped>
.link-container {
    display: flex;
    width: 60%;
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

#Header1 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>