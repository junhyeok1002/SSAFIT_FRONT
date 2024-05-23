<template>
    <div>
        <div id="LeftTitle">
            <h4>근육 목록</h4>
            <hr>
        </div>
        <div style="padding: 0.5rem;">
            <MuscleComponent v-for="muscle in store.MuscleList" :key="muscle.e_name" :muscle="muscle" />
        </div>
    </div>
</template>

<script setup>
import MuscleComponent from './MuscleComponent.vue'; // 컴포넌트 임포트
import { useMuscleStore } from '@/stores/routine';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const store = useMuscleStore()
onMounted(() => {
    store.getMuscleList();
})

</script>

<style scoped>
#LeftTitle {
    position: sticky;
    top: 0;
    background-color: white;
}
</style>