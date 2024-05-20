<template>
    <div style="display: flex;">
        <div>
            <h4>운동 상세</h4>

            <hr>{{ store.OneFitness.e_name }}
            <hr>{{ store.OneFitness.name }}
            <hr>{{ store.OneFitness.muscle.agonist }}
            <hr>{{ store.OneFitness.muscle.synergists_first }}
            <hr>{{ store.OneFitness.muscle.synergists_second }}

        </div>  
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import { useMuscleStore } from '@/stores/routine';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import FitnessList from '@/components/routine/FitnessList.vue'

const route = useRoute();
const store = useMuscleStore()
onMounted(() => {
    store.getOneFitness(route.params.fitnessId)
})
</script>

<style scoped></style>