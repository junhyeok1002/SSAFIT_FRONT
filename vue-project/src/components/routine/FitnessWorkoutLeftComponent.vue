<template>
  <div class="fitness-box">
    <p style="margin-bottom: 0;">{{ fitness.e_name }}<br>({{ fitness.name }})</p>
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