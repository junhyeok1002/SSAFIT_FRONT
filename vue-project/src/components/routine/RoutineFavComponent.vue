<template>
    <div style="display: flex;">
    <div class="card" @click="goToWorkOut(routineId)">
        <h1 class="card-title">Routine {{ routineId }}</h1>
        <hr>
        <div
            style="display: flex; justify-content: space-around; align-items: center; overflow-x: auto; flex-wrap: nowrap; white-space: nowrap;">
                <img v-for="routineName in value" :key="routineName" :src="getRoutineImageSrc(routineName)" alt="Routine Image" style="height: 3.5rem;">
                
        </div>

    </div>
    <button style="width: 2.5rem; height: 10rem; border-radius: 10px; margin-right: 1rem;" class="btn btn-outline-danger" @click="removeRoutine(routineId)">삭제</button>
    </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';
import { useMuscleStore } from '@/stores/routine';
import { defineProps } from 'vue';
import { onMounted } from 'vue';


const props = defineProps({
  routineId: {
    type: Number, // 혹은 String, 필요에 따라 타입을 지정하세요
    required: true
  }, 
  key:{
    type : String,
    required : true
  },
  value:{
    type : Array,
    required : true
  }

});

const store = useMuscleStore()
onMounted(() => {
    console.log("dfdfd", props.routineId);
    store.getOneRoutine(props.routineId);
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
