<template>
    <div @click="goToWorkOut(rId)">
    <div style="display: flex;">
    <div class="card">
        <h1 class="card-title">Routine {{ rId }}</h1>
        <hr>
        <div
            style="display: flex; justify-content: space-around; align-items: center; overflow-x: auto; flex-wrap: nowrap; white-space: nowrap;">
                <img v-for="routineName in routine" :key="routineName" :src="getRoutineImageSrc(routineName)" alt="Routine Image" style="height: 3.5rem;">
        </div>

    </div>
    <button style="width: 2.5rem; height: 10rem; border-radius: 10px; margin-right: 1rem;" class="btn btn-outline-primary">완료</button>
    </div>
    </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';
import { useMuscleStore } from '@/stores/routine';
import { defineProps } from 'vue';
import { onMounted } from 'vue';
import { ref} from 'vue'


const props = defineProps({
    routine:{
    type : Array,
    required : true
  }

});

const store = useMuscleStore();
const rId = ref(0);
onMounted(() => {
    console.log("dfdfd", props.routine);
    // store.getOneRoutine(props.routineId);

    function sendRoutineDataToServer(routineData) {
    // 서버 엔드포인트 URL
    var endpointUrl = "http://localhost:8080/api-routine/routine";

    // HTTP POST 요청을 보낼 데이터
    var requestData = JSON.stringify(routineData);

    // HTTP 요청 설정
    var requestConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestData
    };

    // HTTP POST 요청 보내기
    fetch(endpointUrl, requestConfig)
        .then(function(response) {
            // 서버 응답을 JSON 형식으로 파싱
            return response.json();
        })
        .then(function(data) {
            // 서버 응답 처리
            console.log("서버 응답:", data.id);
            rId.value = data.id;

            // 여기에서 필요한 추가 작업을 수행할 수 있습니다.
        })
        .catch(function(error) {
            // 오류 처리
            console.error("오류 발생:", error);
        });
}

// props.routine에 있는 루틴 데이터를 서버로 전송
sendRoutineDataToServer(props.routine);








    
})

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const user = userStore.user;
const routineInfo = JSON.parse(user.favorite);
const test = routineInfo;
console.log("뭔가 있긴한가? ",user,routineInfo);


const goToWorkOut = function(routineId) {
    router.push({name:'RoutineDetailView',params:{routineId:routineId}});
    
}
const removeRoutine = async function(routineId) {
    await userStore.deleteFav(routineId);
    location.reload();
}

// 해당 루틴에 대한 이미지 경로를 가져오는 함수
const getRoutineImageSrc = (routineName) => {
    // 예시 경로: asset/img/muscle/이름.png
    return `/src/assets/img/muscle/${routineName}.png`;
}
</script>

<style scoped>
.card {
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 1rem;
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
}
</style>
