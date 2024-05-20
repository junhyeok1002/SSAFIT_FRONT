<template>
    <div class="muscle-box">
      <div class="muscle-info">
        <RouterLink :to="{name:'SelectFitness',params: {muscleId : muscle.e_name}}" >
            <p>{{ muscle.name }}({{ muscle.e_name }})</p>
            <!-- <p> 부피: {{ muscle.volume }}</p> -->
        </RouterLink>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'MuscleComponent',
    props: {
      muscle: Object // 근육 정보를 받아올 prop
    }
  }
  </script>
  
  <style scoped>
  .muscle-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .muscle-info{
    margin-top: 0;
    display: flex;

  }
  
  .muscle-info p {
    margin: 5px 0;
  }
  </style>
  