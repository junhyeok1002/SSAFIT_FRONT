<template>
    <div>
        <div style="padding: 0.5rem;">
            <div v-if="store.WorkoutSelect.length > 0">
                <FitnessWorkoutComponent v-for="fitness in store.WorkoutSelect" :key="fitness.e_name" :fitness="fitness" />
                <br>
            </div>
        </div>
    </div>
</template>

<script setup>
import FitnessComponent from './FitnessComponent.vue';
import { useMuscleStore } from '@/stores/routine';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';
import FitnessWorkoutComponent from './FitnessWorkoutComponent.vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
onMounted(() => {
    store.getWorkoutSelectInit();
})
</script>