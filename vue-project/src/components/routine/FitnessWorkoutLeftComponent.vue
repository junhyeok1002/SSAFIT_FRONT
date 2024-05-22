<template>

  <div class="fitness-box">
    <!-- <img src="`@/assets/img/muscle/Dumbbell_Curl.png`" alt="Dumbbell_Curl" style="width: 100%; height: 100%;"> -->
    <p style="margin-bottom: 0;">{{ fitness.e_name }}<br>({{ fitness.name }})</p>
    <!-- <div class="muscles">
      <div v-if="fitness.muscle.agonist && fitness.muscle.agonist.length">
        <strong>주 근육:</strong> {{ fitness.muscle.agonist.join(', ') }}
      </div>
      <div v-else>
        <strong>주 근육:</strong> 없음
      </div>
      <div v-if="fitness.muscle.synergists_first && fitness.muscle.synergists_first.length">
        <strong>일차 보조 근육:</strong> {{ fitness.muscle.synergists_first.join(', ') }}
      </div>
      <div v-else>
        <strong>일차 보조 근육:</strong> 없음
      </div>
      <div v-if="fitness.muscle.synergists_second && fitness.muscle.synergists_second.length">
        <strong>이차 보조 근육:</strong> {{ fitness.muscle.synergists_second.join(', ') }}
      </div>
      <div v-else>
        <strong>이차 보조 근육:</strong> 없음
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'FitnessComponent',
  props: {
    fitness: Object // 피트니스 정보를 받아올 prop
  }
}
</script>

<style scoped>
.fitness-box {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>