<template>
    <div>
        <div id="LeftTitle">
        <h4>루틴 분석</h4>
        <hr>
        </div>

        <!-- {{ store.RoutineDetail.activation.TOTAL }} -->
        <div v-for="(value, key) in store.RoutineTotal" :key="key" style="font-weight: bold; color: #4556a0;">
            {{ value.key  }} VOLUME : {{ value.value }}
            <ProgressComponent :value="value.value"/>
        </div>
        
        <div v-for="(value, key) in store.RoutineActivation" :key="key" style="font-weight: 500;">
            {{ value.key  }} : {{ value.value }} %
            <ProgressComponent :value="value.value"/>
        </div>
    </div>
</template>

<script setup>
import ProgressComponent from '@/components/routine/ProgressComponent.vue'
import { useMuscleStore } from '@/stores/routine';
import { useRouter } from 'vue-router'; // 수정된 부분: useRouter를 import합니다.
import { onMounted } from 'vue';

// 수정된 부분: useRouter를 사용하여 router 객체를 가져옵니다.
const router = useRouter();
const store = useMuscleStore()

onMounted(() => {
    store.getRoutineActivation();
})
</script>

<style scoped>
    #LeftTitle {
        position: sticky;
        top: 0;
        background-color: white;
    }


</style>