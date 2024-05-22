<script setup>
import { useRouter,useRoute } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const user = userStore.user;
const routineInfo = JSON.parse(user.favorite);
console.log("뭔가 있긴한가? ",user,routineInfo);


const goToWorkOut = function(routineId) {
    router.push({name:'RoutineDetailView',params:{routineId:routineId}});
    
}
const removeRoutine = async function(routineId) {
    await userStore.deleteFav(routineId);
    location.reload();
}


</script>

<template>
    <ul>
        <li v-for="(value, key, index) in user.favoriteRoutine" style="display: flex;">
        <button style="width: 90%;" class="btn btn-outline-secondary" @click="goToWorkOut(routineInfo[key])">{{ value }}</button>
        <button style="width: 10%;" class="btn btn-outline-danger" @click="removeRoutine(routineInfo[key])">삭제</button>
        </li>
    </ul>
</template>

<style scoped>

</style>