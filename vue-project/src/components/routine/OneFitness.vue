<template>
    <div style="display: flex;">
        <div>
            <h4>운동 상세</h4>

            <hr>{{ store.OneFitness }}
  
            <!-- <hr>{{ store.OneFitness.muscle.agonist }}
            <hr>{{ store.OneFitness.muscle.synergists_first }}
            <hr>{{ store.OneFitness.muscle.synergists_second }} -->

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
    store.getOneFitness(route.params.fitnessId)
    console("온마운티드: " + store.OneFitness)
})
</script>

<style scoped></style>