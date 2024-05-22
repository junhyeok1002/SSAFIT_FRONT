<template>
    <div>
        <FitnessWorkoutLeftComponent v-for="fitness in store.WorkoutRemain" :key="fitness.e_name" :fitness="fitness" />
    </div>
</template>

<script setup>
import FitnessWorkoutLeftComponent from './FitnessWorkoutLeftComponent.vue';
import { useMuscleStore } from '@/stores/routine';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
onMounted(() => {
    store.getWorkoutSelectInit();
})
</script>