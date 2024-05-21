<template>
    <div id="LeftTitle"><h4>운동 목록</h4><hr></div>
    <div style="padding: 0.5rem;">
        <div v-if="store.FitnessListAgonist.length > 0">
            <div id="SubTitle">주동근 운동</div>
            <FitnessComponent v-for="fitness in store.FitnessListAgonist" :key="fitness.e_name" :fitness="fitness" />
            <br>
        </div>
        <div v-if="store.FitnessListSynergy1.length > 0 || store.FitnessListSynergy2.length > 0">
            <div id="SubTitle">협응근 운동</div>
            <FitnessComponent v-for="fitness in store.FitnessListSynergy1" :key="fitness.e_name" :fitness="fitness" />
            <FitnessComponent v-for="fitness in store.FitnessListSynergy2" :key="fitness.e_name" :fitness="fitness" />
            <br>
        </div>
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
    store.getFitnessListSynergy1();
    store.getFitnessListSynergy2();
})
</script>

<style scoped>
    #SubTitle{
        font-weight: bold;
        font-size: 1.2rem;
        text-align: left;
    }


    #LeftTitle{
		position: sticky; 
		top: 0;
		background-color: white;
	}
</style>