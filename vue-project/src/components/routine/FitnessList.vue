<template>
    <div style="display: flex;">
    <div>
        <h4>운동 목록</h4>
        <hr>
        <table>
            <tr v-for="fitness in store.FitnessListAgonist">
                <td>
                    <RouterLink :to="{name:'DetailFitness',params: {fitnessId : fitness.e_name}}" @click="refreshPage">
                        {{ fitness.e_name }}({{ fitness.name }})
                    </RouterLink>
                </td>
            </tr>
        </table>
    </div>
    <RouterView></RouterView>
    </div>
</template>

<script setup>
import { useMuscleStore } from '@/stores/routine';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

 
const store = useMuscleStore()
const route = useRoute();

onMounted(() => {
    store.getFitnessListAgonist(route.params.muscleId)
})

const refreshPage = () => {
    console.log("click!!!!!!!!!!!!");
    console.log("click!",route.params.fitnessId);
    store.getOneFitness(route.params.fitnessId);
}
</script>