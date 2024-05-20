<template>
    <div id="LeftTitle"><h4>운동 목록</h4><hr></div>
    <div style="padding: 0.5rem;">
        <FitnessComponent v-for="fitness in store.FitnessListAgonist" :key="fitness.e_name" :fitness="fitness" />
    </div>
</template>

<script setup>
import FitnessComponent from './FitnessComponent.vue';
import { useMuscleStore } from '@/stores/routine';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const store = useMuscleStore()

onMounted(() => {
    store.getFitnessListAgonist();
})
</script>

<style scoped>
    #LeftTitle{
		position: sticky; 
		top: 0;
		background-color: white;
	}
</style>