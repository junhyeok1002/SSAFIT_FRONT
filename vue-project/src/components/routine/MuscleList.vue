<template>
    <div style="display: flex;">
        <div>
            <h4>근육 목록</h4>
            <hr>
            <table>
                <tr v-for="muscle in store.MuscleList">
                    <td>
                        <RouterLink :to="{name:'SelectFitness',params: {muscleId : muscle.e_name}}" @click="refreshPage">
                            {{ muscle.e_name }}({{ muscle.name }})
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
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute();
const store = useMuscleStore()
onMounted(() => {
    store.getMuscleList();
})

const refreshPage = () => {
    console.log("click!",route.params.muscleId);
    store.getFitnessListAgonist(route.params.muscleId);
    // location.reload();
}
</script>

<style scoped></style>