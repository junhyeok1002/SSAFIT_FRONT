<template>
    <div id="LeftTitle"><h4>운동 상세</h4><hr></div>
    <div style="padding: 0.5rem;">
        <div @click="saveToLocalStorage">{{ store.OneFitness }}</div>
        <div>{{ store.OneFitness.name }}</div>
    </div>
</template>

<script setup>
import { useMuscleStore } from '@/stores/routine';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const store = useMuscleStore()

const saveToLocalStorage = () => {
    console.log("로컬 스토리지 저장");
    localStorage.setItem(store.OneFitness.e_name, JSON.stringify(store.OneFitness));
    console.log(localStorage.getItem(store.OneFitness.e_name));
    location.reload();
}
onMounted(() => {
    store.getOneFitness();
})
</script>

<style scoped>
    #LeftTitle{
    position: sticky; 
    top: 0;
    background-color: white;
	}
</style>
