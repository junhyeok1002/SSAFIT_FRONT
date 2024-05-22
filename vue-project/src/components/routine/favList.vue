<script setup>
import { useRouter,useRoute } from 'vue-router';
import { useUserStore } from '@/stores/useUserStore';

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const goToWorkOut = function(routineId) {
    // router.push({name:'RoutineDetailView',params:{routineId:routineId}});
}
const removeRoutine = function(routineId) {
    // userStore.deleteFav(routineId);
}


</script>

<template>
    <!-- <ul>
        <li v-for="(value, key, index) in routineList" style="display: flex;">
        <button style="width: 90%;" class="btn btn-outline-secondary" @click="goToWorkOut(value)">{{ userStore.user.favoriteRoutine[key] }}</button>
        <button style="width: 10%;" class="btn btn-outline-danger" @click="removeRoutine(value)">삭제</button>
        </li>

    </ul> -->
    <div>
        여긴 즐찾 
    </div>
</template>

<style scoped>

</style>