<template>
    <div>
        <h1>루틴 디테일</h1>

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
        <br/>

        <div style="display: flex;">
        <div style="width: 50%;">
            <RoutineAnalysis />
        </div>
        <div style="width: 50%;">
            <RoutineChart />
        </div>
    </div>      

    </div>
</template>
<script setup>
import RoutineAnalysis from '@/components/routine/RoutineAnalysis.vue'
import RoutineChart from '@/components/routine/RoutineChart.vue'
import { useMuscleStore } from '@/stores/routine';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
onMounted(() => {
    store.getRoutineDetail();
})

const addToFavorites = function() {
    // router.push({name:'fav'});
    alert("즐겨찾기 해라!!!!!!!코드 구현하는 너말이야!!");
}

const goToHome = function() {
    router.push({name:'main'});
}

const startExercise = function() {
    router.push({ name: 'workout'});
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
</style>