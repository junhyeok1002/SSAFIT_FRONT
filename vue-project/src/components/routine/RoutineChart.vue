<template>
    <div>
        <h1>루틴차트</h1>
        {{ store.RoutineDetail }}
    </div>
</template>

<script setup>
import { useMuscleStore } from '@/stores/routine';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()
onMounted(() => {
    store.getRoutineDetail();
})
</script>