<template>
    <div>
        <div id="LeftTitle">
        <h4>루틴 상세</h4>
        <hr>
        </div>

        <div style="padding: 0.5rem;">
            <div v-if="store.RoutineFitnessDetail.length > 0">
                <FitnessComponent v-for="fitness in store.RoutineFitnessDetail" :key="fitness.e_name" :fitness="fitness" />
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

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
onMounted(() => {
    store.getRoutineFitnessDetail();
})
</script>

<style scoped>
    #LeftTitle {
        position: sticky;
        top: 0;
        background-color: white;
    }

</style>